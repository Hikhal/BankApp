// Import necessary hooks from React
import React, { useState, useEffect } from "react";

// Exporting a function component named Debit
export default function Debit(props) {
  // Set up states
  const [description, setDescription] = useState(""); // For form input: description
  const [amount, setAmount] = useState(""); // For form input: amount
  const [submissions, setSubmissions] = useState([]); // For storing the list of submissions
  const [totalAmount, setTotalAmount] = useState(props.debit); // To keep track of the total amount of debit
  const [balance, setBalance] = useState(0); // To keep track of the balance
  
  // UseEffect to calculate total debit and balance
  useEffect(() => {
    // Calculate total amount using the debit from props and the sum of all submitted amounts
    setTotalAmount(
      props.debit + submissions.reduce((acc, curr) => {
        return acc - parseFloat(curr.amount);
      }, 0)
    );
    // Calculate balance by subtracting credit from the total amount of debit
    setBalance(totalAmount - props.credit);
  }, [props.credit, submissions, totalAmount, props.debit]); // Dependency array

  // Function to handle change in description input field
  function useDebit(event) {
    setDescription(event.target.value);
  }

  // Function to handle change in amount input field
  function addAmount(event) {
    const value = event.target.value;
    // Check to see if the value is empty
    if (value === "") {
      alert("Input cannot be a String. Must be an Integer.");
    } else {
      setAmount(value);
    }
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Create new submission object
    const newSubmission = {
      description,
      amount,
      date: currentDate,
    };

    // Add the new submission to the array of submissions
    setSubmissions([...submissions, newSubmission]);

    // Clear the input fields
    setDescription("");
    setAmount("");
  }

  // Return JSX for rendering
  return (
    <div className="debitContainer">
      <h1>I AM DEBITS</h1>
      <form onSubmit={handleSubmit} className="forms">
        <div className="innerContainer">
        <input 
          type="text"
          value={description}
          placeholder="description"
          onChange={useDebit}
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
      <h3>Account Balance: ${balance} </h3>
      <h3>Total Debit: ${totalAmount}</h3>

      <div>
        {/* Map over submissions to render the details of each submission */}
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
