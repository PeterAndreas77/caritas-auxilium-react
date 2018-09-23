import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="not-found">
      <h1>404 Page Not Found</h1>
      <Link to="/landing">
        <button>back to home</button>
      </Link>
    </div>
  );
};
