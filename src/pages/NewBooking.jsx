import { useState } from "react";
import { ConfigProvider, Radio, Result, Steps } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../styles/NewBooking.css";

const NewBooking = () => {
  const [current, setCurrent] = useState({ a: "customer", b: 0 });
  const [custormer, setCustomer] = useState("process");
  const [booking, setBooking] = useState("wait");
  const [confirmation, setConfirmation] = useState("wait");
  const [done, setDone] = useState("wait");
  const [gender, setGender] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedType, setBedType] = useState("");
  const steps = [
    {
      title: "First",
      content: (
        <form className="customer-form">
          <h3>Customer Details</h3>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Name" id="name" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" placeholder="Enter Age" id="age" />
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
                <Radio value={"male"} style={{ fontWeight: "normal" }}>
                  Male
                </Radio>
                <Radio value={"female"} style={{ fontWeight: "normal" }}>
                  Female
                </Radio>
              </Radio.Group>
            </div>
          </div>
          <label htmlFor="phone">Phone No.</label>
          <input type="text" placeholder="Enter Phone NO." id="phone" />

          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Enter Address" id="address" />
        </form>
      ),
    },
    {
      title: "Second",
      content: (
        <form className="customer-form">
          <h3>Booking Details</h3>
          <label htmlFor="days">Staying Days</label>
          <input type="number" placeholder="Enter Staying Days" id="days" />
          <label htmlFor="rooms">Rooms</label>
          <input type="number" placeholder="Enter Number of Rooms" id="rooms" />
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
                <Radio value={"single"} style={{ fontWeight: "normal" }}>
                  Single
                </Radio>
                <Radio value={"double"} style={{ fontWeight: "normal" }}>
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
              width: "250px",
              margin: "5px",
            }}
          >
            <span htmlFor="brooms">Customer Name : </span>
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>
              {"Midul"}
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
                colorInfo: "rgb(74 239 5 / 84%)",
              },
            }}
          >
            <Result
              icon={<SmileOutlined />}
              title="Great, Booking completed Successfully"
              extra={
                <button
                  className="login-glowing-btn"
                  style={{ margin: "auto " }}
                >
                  <span style={{ color: "white" }}>Home</span>
                </button>
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
      setCurrent({ a: "done", b: current.b + 1 });
      setConfirmation("finish");
      setDone("finish");
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
          colorPrimary: "red",
          colorSplit: "white",
          colorTextDisabled: "white",
          colorText: "red",
          colorTextTertiary: "white",
        },
      }}
    >
      <div className="step-booking-body">
        <div className="booking-steps">
          <Steps
            current={current.b}
            items={[
              {
                title: "Customer Details",
                status: custormer,
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
