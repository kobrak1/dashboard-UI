import { useContext } from "react";
import { ChartContext } from "../../context/ChartProvider";
import "./Total.css";

const Total = () => {
  const { totalVisits } = useContext(ChartContext);
  return (
    <div className="main-total">
      <div className="total-item">
        <span className="down">
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
        <span className="down">
          <span className="material-symbols-outlined">north_east</span>
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
      <div className="total-item-3">
        <span className="down">
          <span className="material-symbols-outlined">podcasts</span>
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
      <div className="total-item-3">
        <span className="down">
          <span className="material-symbols-outlined">monitoring</span>
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
    </div>
  );
};

export default Total;
