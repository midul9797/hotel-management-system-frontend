import { useState } from "react";
import "../styles/LogIn.css";
import { Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState("");
  const [changed, setChanged] = useState(false);
  const router = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/admins/${username}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        if (password === data?.data[0]?.password) {
          setChanged(!changed);
          setSuccess("Successful");
          localStorage.setItem("isLoggedIn", true);
          router("/home", { replace: true });
        } else {
          setSuccess("Something went wrong try again");
          setChanged(!changed);
        }
      });
  };
  return (
    <>
      <div className="login-background" style={{ position: "static" }}>
        {success === "Successful" && (
          <Alert
            type="success"
            message={success}
            closable
            showIcon
            style={{ marginBottom: "10px" }}
          />
        )}
        {success === "Something went wrong try again" && (
          <Alert
            type="error"
            message={success}
            closable
            showIcon
            style={{ marginBottom: "10px" }}
          />
        )}
        <form>
          <h3 className="booking-title">Admin LogIn</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            onBlur={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            onBlur={(e) => setPassword(e.target.value)}
          />

          <div className="login-btn-box">
            <button className="login-glowing-btn" onClick={handleLogin}>
              <span className="login-glowing-txt">
                L o <span className="login-faulty-letter">g </span>I n
              </span>
            </button>
            <p style={{ fontSize: "clamp(12px, 1.5vw, 18px)" }}>
              Don&apos;t have an account?{" "}
              <Link
                to="/sign-up"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
