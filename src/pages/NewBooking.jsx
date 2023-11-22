import { useState } from "react";
import { ConfigProvider, Radio, Result, Steps } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../styles/NewBooking.css";
import { Link } from "react-router-dom";

const NewBooking = () => {
  const [current, setCurrent] = useState({ a: "customer", b: 0 });
  const [customer, setCustomer] = useState("process");
  const [booking, setBooking] = useState("wait");
  const [confirmation, setConfirmation] = useState("wait");
  const [done, setDone] = useState("wait");
  const [gender, setGender] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedType, setBedType] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [roomNumbers, setRoomNumbers] = useState([]);
  const handleCreateCustomer = () => {
    fetch(
      "https://hotel-delta-management-midul9797.vercel.app/api/v1/customers/create-customer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          age: parseInt(age),
          address,
          gender,
        }),
      }
    )
      .then((res) => res.json())
      .then((d) => {
        if (d.success) handleCreateRoom();
        else alert("Phone Number Already Exists");
      });
  };
  const handleCreateRoom = () => {
    fetch(
      `https://hotel-delta-management-midul9797.vercel.app/api/v1/rooms/${roomType}/${bedType}/${rooms}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customer_phone: phone }),
      }
    )
      .then((res) => res.json())
      .then((d) => {
        setRoomNumbers(d.data);
        if (d.success) handleCreateBooking(d.data);
      });
  };
  const handleCreateBooking = (r) => {
    fetch(
      "https://hotel-delta-management-midul9797.vercel.app/api/v1/bookings/create-booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room_type: roomType,
          rooms: parseInt(rooms),
          bed_type: bedType,
          customer_phone: phone,
          days: parseInt(days),
          roomNumbers: r,
        }),
      }
    )
      .then((res) => res.json())
      .then((d) => {
        console.log(
          JSON.stringify({
            room_type: roomType,
            rooms: parseInt(rooms),
            bed_type: bedType,
            customer_phone: phone,
            days: parseInt(days),
            roomNumbers: r,
          })
        );
        if (d.success) {
          setCurrent({ a: "done", b: current.b + 1 });
          setConfirmation("finish");
          setDone("finish");
        }
      });
  };
  const handleConfirmation = async () => {
    if (
      name &&
      age &&
      phone &&
      gender &&
      days &&
      roomType &&
      rooms &&
      bedType
    ) {
      fetch(
        `https://hotel-delta-management-midul9797.vercel.app/api/v1/rooms/count-room/${roomType}/${bedType}/${rooms}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((d) => {
          console.log(JSON.stringify({ customer_phone: phone }));

          if (d.data === true) {
            handleCreateCustomer();
          } else alert("No Room Available");
        });
    }
  };
  const steps = [
    {
      title: "First",
      content: (
        <form className="customer-form">
          <h3>Customer Details</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            onBlur={(e) => setName(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                placeholder="Enter Age"
                id="age"
                onBlur={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <p htmlFor="gender-title" id="gender-title">
                Gender
              </p>

              <Radio.Group
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Radio value={"Male"} style={{ fontWeight: "normal" }}>
                  Male
                </Radio>
                <Radio value={"Female"} style={{ fontWeight: "normal" }}>
                  Female
                </Radio>
              </Radio.Group>
            </div>
          </div>
          <label htmlFor="phone">Phone No.</label>
          <input
            type="text"
            placeholder="Enter Phone NO."
            id="phone"
            onBlur={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            id="address"
            onBlur={(e) => setAddress(e.target.value)}
          />
        </form>
      ),
    },
    {
      title: "Second",
      content: (
        <form className="customer-form">
          <h3>Booking Details</h3>
          <label htmlFor="days">Staying Days</label>
          <input
            type="number"
            placeholder="Enter Staying Days"
            id="days"
            onBlur={(e) => setDays(e.target.value)}
          />
          <label htmlFor="rooms">Rooms</label>
          <input
            type="number"
            placeholder="Enter Number of Rooms"
            id="rooms"
            onBlur={(e) => setRooms(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "25vh",
            }}
          >
            <div>
              <p htmlFor="gender-title" id="gender-title">
                Room Type
              </p>

              <Radio.Group
                onChange={(e) => setRoomType(e.target.value)}
                value={roomType}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Radio value={"AC"} style={{ fontWeight: "normal" }}>
                  AC
                </Radio>
                <Radio value={"Non-AC"} style={{ fontWeight: "normal" }}>
                  Non-AC
                </Radio>
              </Radio.Group>
            </div>
            <div className="">
              <p htmlFor="gender-title" id="gender-title">
                Bed Type
              </p>

              <Radio.Group
                onChange={(e) => setBedType(e.target.value)}
                value={bedType}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Radio value={"Single"} style={{ fontWeight: "normal" }}>
                  Single
                </Radio>
                <Radio value={"Double"} style={{ fontWeight: "normal" }}>
                  Double
                </Radio>
              </Radio.Group>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: "Third",
      content: (
        <form className="customer-form">
          <h3 style={{ marginBottom: "8vh" }}>Confirmation</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Customer Name :{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>{name}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Phone NO. :{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>{phone}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Age:{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>{age}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Gender :{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>{gender}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Rooms:{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>{rooms}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Staying Days :{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>{days}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              {" "}
              Room Type :{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>
              {roomType}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              width: "100%",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms" style={{ color: "whitesmoke" }}>
              Bed Type :{" "}
            </span>
            <span style={{ color: "white", fontWeight: "bold" }}>
              {bedType}
            </span>
          </div>
        </form>
      ),
    },
    {
      title: "Last",
      content: (
        <div className="customer-form">
          <ConfigProvider
            theme={{
              token: {
                colorText: "white",
                colorInfo: "rgb(26, 48, 121)",
              },
            }}
          >
            <Result
              icon={<SmileOutlined />}
              title="Great, Booking completed Successfully"
              extra={
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="bookings-title"
                      style={{ fontSize: "16px" }}
                    >
                      ROOMS
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "30px",
                      }}
                    >
                      {roomNumbers !== undefined &&
                        roomNumbers.map((room) => (
                          <p
                            key={room}
                            style={{ fontWeight: "bold", padding: "5px" }}
                          >
                            {room}
                          </p>
                        ))}
                    </div>
                  </div>
                  <Link to="/home">
                    <button
                      className="login-glowing-btn"
                      style={{ margin: "auto " }}
                    >
                      <span style={{ color: "white" }}>Home</span>
                    </button>
                  </Link>
                </div>
              }
            />
          </ConfigProvider>
        </div>
      ),
    },
  ];
  const next = () => {
    if (current.a === "customer") {
      setCurrent({ a: "booking", b: current.b + 1 });
      setCustomer("finish");
      setBooking("process");
    } else if (current.a === "booking") {
      setCurrent({ a: "confirmation", b: current.b + 1 });
      setBooking("finish");
      setConfirmation("process");
    } else if (current.a === "confirmation") {
      handleConfirmation();
    } else {
      setCurrent({ a: "finished", b: current.b });
      setDone("finish");
    }
    console.log(current.b);
  };
  const prev = () => {
    if (current.b === 1) {
      setBooking("wait");
      setCustomer("process");
      setCurrent({ a: "customer", b: current.b - 1 });
    } else if (current.b === 2) {
      setConfirmation("wait");
      setBooking("process");
      setCurrent({ a: "booking", b: current.b - 1 });
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(26, 48, 121)",
          colorSplit: "white",
          colorTextDisabled: "white",
          colorText: "rgb(26, 48, 121)",
          colorTextTertiary: "white",
        },
      }}
    >
      <div className="step-booking-body">
        <div className="booking-steps">
          <Steps
            current={current.b}
            style={{ fontWeight: "bold" }}
            items={[
              {
                title: "Customer Details",
                status: customer,
                icon: <UserOutlined />,
              },
              {
                title: "Verification",
                status: booking,
                icon: <SolutionOutlined />,
              },
              {
                title: "Confirmation",
                status: confirmation,
                icon: <LoadingOutlined />,
              },
              {
                title: "Done",
                status: done,
                icon: <SmileOutlined />,
              },
            ]}
          />
        </div>
        <div>{steps[current.b].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current.b < steps.length - 2 && (
            <button className="button-next" onClick={() => next()}>
              Next
            </button>
          )}
          {current.b === steps.length - 2 && (
            <button className="button-next" onClick={() => next()}>
              Confirm
            </button>
          )}
          {current.b > 0 && current.b < 3 && (
            <button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
              className="button-prev"
            >
              Previous
            </button>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
};
export default NewBooking;
