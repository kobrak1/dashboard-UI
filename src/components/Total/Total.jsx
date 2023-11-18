import { useContext } from "react";
import { ChartContext } from "../../context/ChartProvider";
import "./Total.css";

const Total = () => {
  const { totalVisits } = useContext(ChartContext);
  return (
    <div className="main-total">
      <div className="total-item">
        <span
          className="decrease"
          style={{
            backgroundColor: "rgba(63, 70, 247, 1)",
            boxShadow: "0 0 15px rgba(4, 177, 235, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            color: "#fff",
          }}
        >
          <span className="material-symbols-outlined">south_west</span>
        </span>
        <div className="visits">
          <p style={{ color: "#c2c4c2" }}>Total Visits</p>
          <div className="total-visits" style={{ color: "#e6e8e6" }}>
            {totalVisits}
          </div>
        </div>
        <div className="rate">
          <p style={{ margin: "0 auto" }}>+1.29%</p>
        </div>
      </div>
      <div className="total-item-2">
        <span
          className="increase"
          style={{
            backgroundColor: "rgba(254, 135, 67, 1)",
            boxShadow: "0 0 15px rgba(235, 177, 4, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            color: "#fff",
          }}
        >
          <span className="material-symbols-outlined">north_east</span>
        </span>
        <div className="visits">
          <p style={{ color: "#c2c4c2" }}>Total Subscribers</p>
          <div className="total-visits" style={{ color: "#e6e8e6" }}>
            {totalVisits}
          </div>
        </div>
        <div className="rate-2">
          <p style={{ margin: "0 auto" }}>-0.53%</p>
        </div>
      </div>
      <div className="total-item-3">
        <span
          className="active-users"
          style={{
            backgroundColor: "rgba(0, 197, 67, 1)",
            boxShadow: "0 0 15px rgba(54, 208, 54)",
          }}
        >
          <span className="material-symbols-outlined">podcasts</span>
        </span>
        <div className="visits">
          <p style={{ color: "#c2c4c2" }}>Active Users</p>
          <div className="total-visits" style={{ color: "#e6e8e6" }}>
            {totalVisits}
          </div>
        </div>
        <div style={{ width: "63px", margin: "0" }}></div>
      </div>
      <div className="total-item-4">
        <span
          className="total-clicks"
          style={{
            backgroundColor: "rgba(137, 35, 217, 1)",
            boxShadow: "0 0 15px rgba(185, 54, 208)",
          }}
        >
          <span className="material-symbols-outlined">monitoring</span>
        </span>
        <div className="visits">
          <p style={{ color: "#c2c4c2" }}>Total Clicks</p>
          <div className="total-visits" style={{ color: "#e6e8e6" }}>
            357
          </div>
        </div>
        <div style={{ width: "63px", margin: "0" }}></div>
      </div>
    </div>
  );
};

export default Total;
