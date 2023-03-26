import React from "react";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordPage from "./ResetPasswordPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>JUST BE CALM WE ARE HERE TO HELP.</h1>
      </header>
      <main>
        <ForgotPasswordPage />
        {/* <ResetPasswordPage /> */}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
