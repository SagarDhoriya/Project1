import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Add logic to handle login request
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="container mt-2">
        <div className="border rounded bg-primary container-fluid my-4">
          <h2 className="text-center my-3 text-white"> Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <label for="email" class="form-label">
          Email
        </label>
        <input
            type="email"
            class="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
            type="password"
            class="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div class="col-12">
      <div className="d-grid my-2 w-75  col-6 mx-auto">
            <button className="btn btn-primary " onClick={() => navigate("/")}>
             <h5>Sign Up</h5> 
            </button>
          </div>
          </div>
        </form>
      
      </div>

      
    </>
  );
}
