import React, { useState, useEffect } from "react";
export default function Credit(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(props.credit);
  const [balance, setBalance] = useState(0)

  
  useEffect(() => {
    setTotalAmount(
      props.credit +
        submissions.reduce((acc, curr) => {
          return acc + parseFloat(curr.amount);
        }, 0)
    );
    setBalance(props.debit - totalAmount);
  }, [props.credit, submissions, props.debit, totalAmount]);

  function addCredit(event) {
    setDescription(event.target.value);
  }

  function addAmount(event) {
    const value = event.target.value;
    setAmount(value === "" ? "" : parseFloat(value));
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

    <div className="creditContainer">
        <h1>I AM CREDITS</h1>
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
    
      <h3>Account Balance: ${balance}</h3>
      <h3>Total Credit: ${totalAmount}</h3>

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
