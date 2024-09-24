import { Col, Row } from "antd";
import "../styles/Rooms.css";
import { useEffect, useState } from "react";
export default function Rooms() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/rooms`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d.data);
      });
  }, []);
  return (
    <div className="rooms-body">
      <div>
        <h1 className="room-title">Rooms</h1>
      </div>
      <Row
        style={{ width: "80vw", marginBottom: "30px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
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
