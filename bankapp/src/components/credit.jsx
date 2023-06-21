import React, { useState } from "react";

export default function Credit(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [submissions, setSubmissions] = useState([]);

  function addCredit(event) {
    setDescription(event.target.value);
  }

  function addAmount(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Create a new submission object with the credit information and date
    const newSubmission = {
      description,
      amount,
      date: currentDate,
    };

    // Add the new submission to the submissions array
    setSubmissions([...submissions, newSubmission]);

    // Clear the input fields
    setDescription("");
    setAmount(0);
  }

  return (
    <div>

        <title>Credits</title>
      <form onSubmit={handleSubmit}>
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
      </form>


      <div>
        {/* Display the submissions */}
        {submissions.map((submission, index) => (
          <div key={index}>
            <p>{submission.date}</p>
            <p>Description: {submission.description}</p>
            <p>Amount: {submission.amount}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
