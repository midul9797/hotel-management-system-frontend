import { SearchOutlined } from "@ant-design/icons";
import "../styles/CancelBooking.css";
import { useState } from "react";
import { Alert, Popconfirm } from "antd";

export default function CheckOut() {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [deleteMsg, setDeleteMsg] = useState(false);
  const [bill, setBill] = useState(0);
  const handleSearch = () => {
    setDeleteMsg(false);
    fetch(
      `https://hotel-delta-management-midul9797.vercel.app/api/v1/bookings/${phone}`
    )
      .then((res) => res.json())
      .then((d) => {
        if (d.data === data) setData(null);
        setData(d.data);
        if (d.data.length !== 0) {
          if (d.data[0]?.room_type === "AC" && d.data[0]?.bed_type === "Single")
            setBill(
              parseInt(d.data[0].rooms) * parseInt(d.data[0].days) * 1000
            );
          else if (
            d.data[0]?.room_type === "AC" &&
            d.data[0]?.bed_type === "Double"
          )
            setBill(
              parseInt(d.data[0]?.rooms) * parseInt(d.data[0]?.days) * 1500
            );
          else if (
            d.data[0]?.room_type === "Non-AC" &&
            d.data[0]?.bed_type === "Single"
          )
            setBill(
              parseInt(d.data[0]?.rooms) * parseInt(d.data[0]?.days) * 500
            );
          else if (
            d.data[0]?.room_type === "Non-AC" &&
            d.data[0]?.bed_type === "Double"
          )
            setBill(
              parseInt(d.data[0]?.rooms) * parseInt(d.data[0]?.days) * 700
            );
        }
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
        if (d.data.length !== 0) {
          setDeleteMsg(true);
          setData(null);
        }
      });
    // fetch(
    //   `http://localhost:4000/download/${data[0].name}/${data[0].phone}/${data[0].room_type}/${data[0].bed_type}/${data[0].days}/${data[0].rooms}/${bill}`
    // )
    //   .then((x) => x.blob())
    //   .then((b) => {
    //     const url = window.URL.createObjectURL(b);
    //     var a = document.createElement("a");
    //     document.body.appendChild(a);
    //     a.style = "display: none";
    //     a.href = url;
    //     a.download = "a.pdf";
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   });
  };

  return (
    <div className="cancel-body">
      {deleteMsg && (
        <Alert
          showIcon
          type="success"
          message="Checked Out Successfully"
          closable
        />
      )}
      {data && data.length === 0 && (
        <Alert
          style={{ marginTop: "30px" }}
          showIcon
          closable
          type="error"
          message="Data Not Found. Wrong phone number"
        />
      )}
      <h1
        className="bookings-title"
        style={{ margin: "15px", fontSize: "2.5em" }}
      >
        CHECK OUT
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span
              className="bookings-title"
              style={{ fontSize: "20px", margin: "30px" }}
            >
              Total Bill: {bill} &#2547;
            </span>
          </div>
        </div>
      )}
      <Popconfirm
        title="Check Out"
        description="Are you sure to check out?"
        onConfirm={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <button className="button-next" style={{ fontSize: "18px" }}>
          Check Out
        </button>
      </Popconfirm>
    </div>
  );
}
