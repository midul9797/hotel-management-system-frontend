import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    console.log("click");
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };
  return (
    <div className="table-body">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "clamp(100px, 10vh, 150px)",
            gap: "clamp(10px, 1vw, 20px)",
            position: "relative",
          }}
        >
          <h1 className="title">HOTEL DELTA MANAGEMENT SYSTEM</h1>

          <button
            style={{
              marginLeft: "auto",
            }}
            className="button-prev"
            onClick={() => handleLogOut()}
          >
            LogOut
          </button>
        </div>
        <div className="button-container">
          <Link to="/all-bookings">
            <button className="unique-button-class spin">
              <div className="lazyload">
                <span
                  className="bookings-title"
                  style={{ fontSize: "clamp(16px, 3vw, 32px)" }}
                >
                  ★
                </span>
              </div>
              <h2>ALL BOOKINGS</h2>
              <p>List of current bookings</p>
            </button>
          </Link>
          <Link to="/new-booking">
            <button className="unique-button-class spin">
              <div>
                <span
                  className="bookings-title"
                  style={{ fontSize: "clamp(16px, 3vw, 32px)" }}
                >
                  ★
                </span>
              </div>
              <h2>New Booking</h2>
              <p>Create new booking with customer and booking details</p>
            </button>
          </Link>
          <Link to="/rooms">
            <button className="unique-button-class spin">
              <div className="lazyload">
                <span
                  className="bookings-title"
                  style={{ fontSize: "clamp(16px, 3vw, 32px)" }}
                >
                  ★
                </span>
              </div>
              <h2>Rooms</h2>
              <p>All rooms with details</p>
            </button>
          </Link>
          <Link to="/cost">
            <button className="unique-button-class spin">
              <div>
                <span
                  className="bookings-title"
                  style={{ fontSize: "clamp(16px, 3vw, 32px)" }}
                >
                  ★
                </span>
              </div>
              <h2>Cost</h2>
              <p>Cost per Room per Day</p>
            </button>
          </Link>
          <Link to="/cancel-booking">
            <button className="unique-button-class spin">
              <div>
                <span
                  className="bookings-title"
                  style={{ fontSize: "clamp(16px, 3vw, 32px)" }}
                >
                  ★
                </span>
              </div>
              <h2>Cancel Booking</h2>
              <p>Cancel any existing booking with details</p>
            </button>
          </Link>
          <Link to="/check-out">
            <button className="unique-button-class spin">
              <div>
                <span
                  className="bookings-title"
                  style={{ fontSize: "clamp(16px, 3vw, 32px)" }}
                >
                  ★
                </span>
              </div>
              <h2>Check Out</h2>
              <p>Check Out from the hotel with the bill</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
