import { useContext } from "react";
import { ChartContext } from "../../context/ChartProvider";
import "./UserTraffic.css";

const UserTraffic = () => {
  const { isDropDownYear, handleDropDownYear } = useContext(ChartContext);
  return (
    <div className="user-traffic-main">
      <div className="header-user-traffic">
        <h1>UserTraffic</h1>
        <div className="header-right">
          <div className="user-signup">
            <span className="blue-box"></span>
            <p>User Sign Up</p>
          </div>
          <div className="user-subscribed">
            <span className="red-box"></span>
            <p>User Subscribed</p>
          </div>
          <div className="year">
            <button className="year-button" onClick={handleDropDownYear}>
              <p>Current Year</p>
              <span
                className={`material-symbols-outlined ${
                  isDropDownYear === true ? "up" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isDropDownYear && (
              <div className="dropdown-year">
                <a href="#">2020</a>
                <a href="#">2021</a>
                <a href="#">2022</a>
                <a href="#">2023</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTraffic;
