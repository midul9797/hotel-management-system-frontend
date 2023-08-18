import { SearchOutlined } from "@ant-design/icons";
import "../styles/CancelBooking.css";

export default function CancelBooking() {
  return (
    <div className="cancel-body">
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
          >
            <SearchOutlined />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Enter Phone No."
          />
        </div>
      </div>
      <div className="cancel-details">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Customer Name : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Phone NO. : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Age: </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Gender : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Rooms: </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Staying Days : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms"> Room Type : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Checked In : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "250px",
            margin: "5px",
          }}
        >
          <span htmlFor="brooms">Bed Type : </span>
          <span className="bookings-title" style={{ fontSize: "14px" }}>
            {"Midul"}
          </span>
        </div>
      </div>

      <button className="button-next" style={{ fontSize: "18px" }}>
        Cancel Booking
      </button>
    </div>
  );
}
