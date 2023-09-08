import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
