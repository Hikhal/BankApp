import React, {useState, useEffect} from "react"
import axios from 'axios'
export default function Debit(){
    const [currDebit, setCurrDebit] = useState(0)
    const api = 'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits'
    useEffect(()=>{
        async function setDebit(){
            try {
                const info = await axios.get(api)
                setCurrDebit(info.data)
            } 
             catch (error) {
                console.error("error " + error)
            }
        }
        setDebit()
    })
    return(
        <>
        <h1>Debit</h1>
        <h2>Current Debit: {currDebit}</h2>
        </>
        
    )
}