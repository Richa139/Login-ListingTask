import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.brokeragentbase.com/user/login",
        { email, password }
      );
      console.log(response.data);
      seterror("");
      onLogin();
    } catch (error) {
      console.error("Login failed:", error.message);
      seterror(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{alignItems:"center" , marginLeft:"20px"}}>
    <h1> Login Page</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br/>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br/>
      <button type="submit" style={{color:"black" , background:"lightblue" , padding:"10px"}}>Login</button>
      {error && <p>Error:- {error}</p>}
    </form>
  );
};

export default LoginForm;
