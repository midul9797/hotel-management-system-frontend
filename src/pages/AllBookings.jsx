import { useEffect, useState } from "react";
import "../styles/AllBookings.css";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { Alert } from "antd";
export default function AllBookings() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      setLoading(true);
      setInputValue(""); // Clear the input value
      fetch(`${import.meta.env.VITE_URL}bookings/${search}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((d) => {
          setLoading(false);
          if (d.data.length === 0) {
            setNotFound(true);
            setSearch("");
          } else {
            setData(d.data);
          }
        });
    }
  };

  useEffect(() => {
    if (!notFound) {
      setLoading(true);
      fetch(`${import.meta.env.VITE_URL}bookings`, { method: "GET" })
        .then((res) => res.json())
        .then((d) => setData(d.data))
        .finally(() => setLoading(false));
    }
  }, [notFound]);

  return (
    <div className="table-body">
      {notFound && (
        <Alert
          showIcon
          closable
          type="error"
          message="Data Not Found"
          description="Wrong Phone Number"
          onClose={() => setNotFound(false)}
        />
      )}
      <div className="title-search-container">
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
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {loading ? (
        <div
          className="table-body"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            fontSize: "20px",
          }}
        >
          <LoadingOutlined />
        </div>
      ) : (
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
      )}
    </div>
  );
}
