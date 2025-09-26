import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "../styles.css";
import Home from "./pages/Home";
import NewBook from "./pages/New-Book";
import SignIn from "./pages/SignIn";
import Nav from "./Nav";
import Notes from "./Notes";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      {/* Header stays visible on all pages */}
      <Nav></Nav>

      {/* Routes control which page content is shown */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewBook />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />

        {/* Default redirect (optional) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
