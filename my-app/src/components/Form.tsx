import React from "react";
export function Form() {
  return (
    <div className="container">
      <div className="registrate-wrapp">
        <h1 className="registrate-title"></h1>
        <form className="registrate-form" action="#">
          <div className="registrate-input-container">
            <label className="registrate-input-title">
              <input
                className="registrate-input"
                type="text"
                placeholder="Name"
              />
            </label>
          </div>
          <label className="registrate-input-container">
            <div className="registrate-input-title">
              <input
                className="registrate-input"
                placeholder="Password"
                type="password"
              />
            </div>
          </label>
          <button type="submit" className="registrate-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
