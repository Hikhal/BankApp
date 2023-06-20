import React,{useState, useEffect} from "react"
import { Link } from "react-router-dom";
import axios from 'axios'
export default function Credit(){
    const [currCred, setCurrCred] = useState(0)
    useEffect(()=>{
        const api = 'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits'
        async function setCred(){
            try {
                const info = await axios.get(api)
                setCurrCred(info.data)
                
            } catch (error) {
                console.log("error" + error)
            }
        }
        setCred()
        
    })
    
    return (
       <div>
        <title>Credits</title>
        <h2>Available Credits: {currCred}</h2>
        <ul>
            <li> <Link to = "/">Go back to the Home Page</Link></li>
        </ul>
       </div>
    )
}