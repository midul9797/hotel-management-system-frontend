import { useState } from "react";
import "../styles/LogIn.css";
import { Alert, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [changed, setChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  const handleLogin = (e, type) => {
    let url, pass;
    e.preventDefault();
    setLoading(true);
    if (type === "auto") {
      url = `${import.meta.env.VITE_URL}admins/admin`;
      pass = "1234";
    } else {
      url = `${import.meta.env.VITE_URL}admins/${username}`;
    }
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
        if (
          password === d?.data[0]?.password ||
          pass === d?.data[0]?.password
        ) {
          pass = "";
          setChanged(!changed);
          setSuccess("Successful");
          localStorage.setItem("isLoggedIn", true);
          router("/home", { replace: true });
        } else {
          setSuccess("Something went wrong try again");
          setChanged(!changed);
        }
      })
      .finally(() => setLoading(false));
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
            <button
              className="login-glowing-btn"
              onClick={(e) => handleLogin(e, "manual")}
            >
              {loading ? (
                <LoadingOutlined />
              ) : (
                <span className="login-glowing-txt">
                  L o <span className="login-faulty-letter">g </span>I n
                </span>
              )}
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
        <Button
          size="large"
          style={{
            color: "white",
            fontSize: "clamp(12px, 1.5vw, 18px)",
            marginTop: "clamp(10px,2vw,20px",
          }}
          onClick={(e) => handleLogin(e, "auto")}
        >
          Auto Login
        </Button>
      </div>
    </>
  );
}
