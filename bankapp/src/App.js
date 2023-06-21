
import React, {useState, useEffect} from "react";
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import UserProfile from "./components/userProfile";
import Credit from "./components/credit";
import Debit from "./components/debit";
import './App.css';


function App() {
  const [currCred, setCurrCredits] = useState(0);
  const [currDebit, setCurrDebit] = useState(0)
    const api = 'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits';

    // function that fetches the credit amount.
    useEffect(() => {
        async function getCredits() {
            try {
                const response = await axios.get(api);
                setCurrCredits(response.data);
            } catch (error) {
                console.error("Error: " + error);
            }
        }

        getCredits();
    }, []);

    // function that fetches the debit amount from the api
    const api1 = 'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits'
    useEffect(()=>{
        async function setDebit(){
            try {
                const info = await axios.get(api1)
                setCurrDebit(info.data)
            } 
             catch (error) {
                console.error("error " + error)
            }
        }
        setDebit()
    },[])

    function balance(debit, credits) {
        return debit - credits;
    }
    const bal = balance(currDebit, currCred)
    const cred = currCred
    const debitAmount = currDebit

  return (
      <Router>
        <div className="lolz">
          {/* Navigation */}
          <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/userProfile">User Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/credit">Credit</Link>
            </li>
            <li className="nav-item">
              <Link to="/debit">Debit</Link>
            </li>
          </ul>
        </nav>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userProfile" element={<UserProfile bal1 = {bal}></UserProfile>} />
            <Route path="/credit" element={<Credit credit = {cred} bal2 = {bal}></Credit>} />
            <Route path="/debit" element={<Debit debit = {debitAmount}></Debit>} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
