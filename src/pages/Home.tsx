import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/pricing">Pricing</Link>
    </>
  );
}

export default Home;
