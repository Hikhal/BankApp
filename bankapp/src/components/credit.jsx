import React, { useState, useEffect } from "react";
// Exporting a function component named Credit
export default function Credit(props) {
  // Set up states
  const [description, setDescription] = useState(""); // For form input: description
  const [amount, setAmount] = useState(""); // For form input: amount
  const [submissions, setSubmissions] = useState([]); // For storing the list of submissions
  const [totalAmount, setTotalAmount] = useState(props.credit); // To keep track of the total amount of credit
  const [balance, setBalance] = useState(0) // To keep track of the balance
  
  // UseEffect to calculate total credit and balance
  useEffect(() => {
    // Calculate total amount using the credit from props and the sum of all submitted amounts
    setTotalAmount(
      props.credit +
        submissions.reduce((acc, curr) => {
          return acc + parseFloat(curr.amount);
        }, 0)
    );
    // Calculate balance by subtracting total amount of credit from debit
    setBalance(props.debit - totalAmount);
  }, [props.credit, submissions, props.debit, totalAmount]); // Dependency array

  // Function to handle change in description input field
  function addCredit(event) {
    setDescription(event.target.value);
  }

  // Function to handle change in amount input field
  function addAmount(event) {
    const value = event.target.value;
    // Use ternary operator to avoid NaN when value is empty
    setAmount(value === "" ? "" : parseFloat(value));
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
