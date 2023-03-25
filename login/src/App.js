import React from "react";
import ForgotPasswordPage from "./ForgotPasswordPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <ForgotPasswordPage />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
