import { Col, Row } from "antd";
import "../styles/Rooms.css";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
export default function Rooms() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_URL}rooms`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="rooms-body">
      <div>
        <h1 className="room-title">Rooms</h1>
      </div>
      <Row
        style={{ width: "90vw", marginBottom: "30px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {loading && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
              fontSize: "20px",
            }}
          >
            <LoadingOutlined />
          </div>
        )}
        {data.map((room) => (
          <Col
            key={room}
            className="gutter-row"
            span={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
            }}
          >
            <div className="room">
              <div
                className={
                  room.available ? "room-light-green" : "room-light-red"
                }
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontWeight: "bold",
                }}
              >
                <span className="room-no">{room.number}</span>
                <span>{room.bed_type}</span>
                <span>{room.room_type}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
