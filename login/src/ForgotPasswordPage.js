import React from "react";
import "./ResetPassword.css";

function ForgotPasswordPage() {
  return (
    <div className="modal-wrapper">
      <div className="modal-backdrop">
        <div className="modal-1">
          <p>
            Forgot your password? Let us know your email address and we will
            email you a password reset link.{" "}
          </p>
          <h2>Forgot Password</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />

            <button type="submit" className="submit-button">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
