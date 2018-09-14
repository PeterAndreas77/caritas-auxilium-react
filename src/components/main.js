import React from "react";
import "../styles/main.css";

const Main = () => {
  return (
    <section className="recent-crisis">
      <div className="form-group">
        <label htmlFor="searchCrisis">Search for Crisis</label>
        <input type="text" id="searchCrisis" name="searchCrisis" />
        <button className="search-recent">search</button>
      </div>
      <div className="crisis-container" />
    </section>
  );
};

export default Main;
