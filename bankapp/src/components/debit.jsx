import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Debit(props){
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(props.debit);

  useEffect(() => {
    setTotalAmount(
      props.debit +
        submissions.reduce((acc, curr) => {
          return acc - parseFloat(curr.amount);
        }, 0)
    );
  }, [props.credit, submissions]);

  function addCredit(event) {
    setDescription(event.target.value);
  }

  function addAmount(event) {
    const value = event.target.value;
    if (value === "") {
      alert("Input cannot be a String. Must be an Integer.");
    } else {
      setAmount(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const currentDate = new Date().toLocaleDateString();

    const newSubmission = {
      description,
      amount,
      date: currentDate,
    };

    setSubmissions([...submissions, newSubmission]);

    setDescription("");
    setAmount("");
  }

  return (
    <div className="debitContainer">
      <form onSubmit={handleSubmit} className="forms">
        <div className="innerContainer">
        <input 
          type="text"
          value={description}
          placeholder="description"
          onChange={addCredit}
        />
        <input
          type="text"
          value={amount}
          placeholder="amount"
          onChange={addAmount}
        />
        <button type="submit">Submit</button>
        </div>
      </form>

      <h3>Total Debit: ${totalAmount}</h3>

      <div>
        {submissions.map((submission, index) => (
          <div key={index}>
            <p>
              Description: {submission.description} &nbsp;&nbsp; Amount: ${submission.amount} &nbsp;&nbsp;{submission.date}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}