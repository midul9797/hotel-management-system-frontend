import { useEffect, useState } from "react";
import "../styles/AllBookings.css";
import { SearchOutlined } from "@ant-design/icons";
export default function AllBookings() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      fetch(
        `https://hotel-delta-management-midul9797.vercel.app/api/v1/bookings/${search}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((d) => setData(d.data));
    }
  };

  useEffect(() => {
    fetch(
      "https://hotel-delta-management-midul9797.vercel.app/api/v1/bookings",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((d) => setData(d.data));
  }, []);
  return (
    <div className="table-body">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="bookings-title">ALL BOOKINGS</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "30vw",
          }}
        >
          <div className="search-box">
            <button className="btn-search" onClick={handleSearch}>
              <SearchOutlined />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Enter Phone No."
              onBlur={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="table-container">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Phone</h1>
            </th>
            <th>
              <h1>Address</h1>
            </th>
            <th>
              <h1>Gender</h1>
            </th>
            <th>
              <h1>Age</h1>
            </th>
            <th>
              <h1>Room Type</h1>
            </th>
            <th>
              <h1>Bed Type</h1>
            </th>
            <th>
              <h1>Rooms</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.address}</td>
              <td>{d.gender}</td>
              <td>{d.age}</td>
              <td>{d.room_type}</td>
              <td>{d.bed_type}</td>
              <td>
                {d.roomNumbers.map((room) => (
                  <span key={room}>{room}, </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
