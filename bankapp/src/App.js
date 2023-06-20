import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import UserProfile from "./components/userProfile";
import Credit from "./components/credit";
import Debit from "./components/debit";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userProfile">User Profile</Link>
            </li>
            <li>
            <Link to="/credit">Credit </Link>
            </li>
            <li>
            <Link to="/debit">Debit </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/debit" element={<Debit></Debit>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
