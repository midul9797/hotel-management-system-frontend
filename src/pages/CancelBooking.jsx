import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import "../styles/CancelBooking.css";
import { useState } from "react";
import { Alert, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

export default function CancelBooking() {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [deleteMsg, setDeleteMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    setDeleteMsg(false);
    fetch(`${import.meta.env.VITE_URL}bookings/${phone}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d.data);
      });
  };
  const handleCancel = () => {
    setLoading(true);
    if (!data) handleSearch();
    fetch(`${import.meta.env.VITE_URL}bookings/${phone}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if (d.success) {
          setDeleteMsg(true);
          setData(null);
          setLoading(false);
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
      });
  };

  return (
    <div className="cancel-body">
      {deleteMsg && (
        <Alert
          showIcon
          type="success"
          message="Booking Cancelled Successfully"
          closable
        />
      )}
      {data && data.length === 0 && (
        <Alert
          showIcon
          closable
          type="error"
          message="Data Not Found"
          description="Wrong Phone Number"
        />
      )}
      <h1
        className="bookings-title"
        style={{ margin: "15px", fontSize: "clamp(20px, 4vw, 32px)" }}
      >
        CANCEL BOOKING
      </h1>

      <div>
        <div className="search-box" style={{ margin: "15px 0" }}>
          <button
            className="btn-search"
            style={{ right: "7px", bottom: "-10px" }}
            onClick={handleSearch}
          >
            <SearchOutlined />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Enter Phone No."
            onBlur={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      {data && (
        <div className="cancel-details">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Customer Name :{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Phone NO. :{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.phone}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Age:{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.age}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Gender :{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.gender}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Rooms:{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.rooms}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Staying Days :{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.days}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              {" "}
              Room Type :{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.room_type}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              width: "90%",
              margin: "5px",
            }}
          >
            <span
              htmlFor="brooms"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              Bed Type :{" "}
            </span>
            <span
              className="bookings-title"
              style={{ fontSize: "clamp(12px, 2vw, 16px)", margin: 0 }}
            >
              {data[0]?.bed_type}
            </span>
          </div>
        </div>
      )}
      <Popconfirm
        title="Cancel Booking"
        description="Are you sure to cancel this booking?"
        onConfirm={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <button
          className="button-next"
          style={{ fontSize: "clamp(16px, 2vw, 24px)" }}
        >
          {loading ? <LoadingOutlined /> : "Cancel Booking"}
        </button>
      </Popconfirm>
    </div>
  );
}
