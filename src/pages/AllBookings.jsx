import "../styles/AllBookings.css";
import { SearchOutlined } from "@ant-design/icons";
export default function AllBookings() {
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
            <button className="btn-search">
              <SearchOutlined />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Enter Phone No."
            />
          </div>
        </div>
      </div>

      <table className="table-container">
        <thead>
          <tr>
            <th>
              <h1>Sites</h1>
            </th>
            <th>
              <h1>Views</h1>
            </th>
            <th>
              <h1>Clicks</h1>
            </th>
            <th>
              <h1>Average</h1>
            </th>
            <th>
              <h1>Sites</h1>
            </th>
            <th>
              <h1>Views</h1>
            </th>
            <th>
              <h1>Clicks</h1>
            </th>
            <th>
              <h1>Average</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>9518</td>
            <td>6369</td>
            <td>01:32:50</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>7326</td>
            <td>10437</td>
            <td>00:51:22</td>
          </tr>
          <tr>
            <td>Amazon</td>
            <td>4162</td>
            <td>5327</td>
            <td>00:24:34</td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>3654</td>
            <td>2961</td>
            <td>00:12:10</td>
          </tr>
          <tr>
            <td>CodePen</td>
            <td>2002</td>
            <td>4135</td>
            <td>00:46:19</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>4623</td>
            <td>3486</td>
            <td>00:31:52</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
