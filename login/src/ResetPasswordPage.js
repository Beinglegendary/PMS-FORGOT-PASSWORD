import React from "react";
import "./ResetPassword.css";
import "./ForgotPassword.css";

function ResetPasswordPage() {
  return (
    <div className="modal-wrapper">
      {" "}
      <div className="modal-backdrop">
        {" "}
        <div className="modal">
          {" "}
          <p>Please create a new password that you haven't used before.</p>{" "}
          <form>
            {" "}
            <label htmlFor="password">New Password:</label>{" "}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your new password"
            />{" "}
            <label htmlFor="confirmPassword">Confirm Password:</label>{" "}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your new password"
            />{" "}
            <button type="submit" className="submit-button">
              {" "}
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ResetPasswordPage;
