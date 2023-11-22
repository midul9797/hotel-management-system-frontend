import { useState } from "react";
import "../styles/LogIn.css";
import "../styles/SignUp.css";
import { Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const router = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    if (code.toLowerCase() === "dbms") {
      fetch(
        "https://hotel-delta-management-midul9797.vercel.app/api/v1/admins/create-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, username, password }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success === true) {
            setSuccess("Successful");
            router("/", { replace: true });
          } else setSuccess("Something went wrong try again");
        });
    }
  };
  return (
    <div className="signup-background">
      {success === "Successful" && (
        <Alert type="success" message={success} closable showIcon />
      )}
      {success === "Something went wrong try again" && (
        <Alert type="error" message={success} closable showIcon />
      )}
      <form className="signup-form">
        <h3>Admin SignUp</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          onBlur={(e) => setName(e.target.value)}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          onBlur={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="code">Code</label>
        <input
          type="text"
          placeholder="Enter Code"
          id="code"
          onBlur={(e) => setCode(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          onBlur={(e) => setPassword(e.target.value)}
        />

        <div className="login-btn-box" style={{ padding: "1vw" }}>
          <button className="login-glowing-btn" onClick={handleSignUp}>
            <span className="login-glowing-txt">
              S i <span className="login-faulty-letter">g n </span>U p
            </span>
          </button>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
