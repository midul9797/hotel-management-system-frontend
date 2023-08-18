import "../styles/Cost.css";
export default function Cost() {
  return (
    <div className="table-body">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="bookings-title">Room Cost</h1>
      </div>

      <table className="cost-container table-container">
        <thead>
          <tr>
            <th>
              <h1>Room Type</h1>
            </th>
            <th>
              <h1>Bed Type</h1>
            </th>
            <th>
              <h1>Cost per Day</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AC</td>
            <td>Single</td>
            <td>1000 &#2547;</td>
          </tr>
          <tr>
            <td>AC</td>
            <td>Double</td>
            <td>1500 &#2547;</td>
          </tr>
          <tr>
            <td>Non-AC</td>
            <td>Single</td>
            <td>500 &#2547;</td>
          </tr>
          <tr>
            <td>Non-AC</td>
            <td>Double</td>
            <td>700 &#2547;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
