import { SearchOutlined } from "@ant-design/icons";
import "../styles/CancelBooking.css";
import { useState } from "react";
import { Alert, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

export default function CancelBooking() {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [deleteMsg, setDeleteMsg] = useState(false);
  const navigate = useNavigate();
  const handleSearch = () => {
    setDeleteMsg(false);
    fetch(
      `https://hotel-delta-management-midul9797.vercel.app/api/v1/bookings/${phone}`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d.data);
      });
  };
  const handleCancel = () => {
    if (!data) handleSearch();
    fetch(
      `https://hotel-delta-management-midul9797.vercel.app/api/v1/bookings/${phone}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if (d.success) {
          setDeleteMsg(true);
          setData(null);
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
        style={{ margin: "15px", fontSize: "2.5em" }}
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
            <span htmlFor="brooms">Customer Name : </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms">Phone NO. : </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms">Age: </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms">Gender : </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms">Rooms: </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms">Staying Days : </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms"> Room Type : </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
            <span htmlFor="brooms">Bed Type : </span>
            <span className="bookings-title" style={{ fontSize: "14px" }}>
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
        <button className="button-next" style={{ fontSize: "18px" }}>
          Cancel Booking
        </button>
      </Popconfirm>
    </div>
  );
}
