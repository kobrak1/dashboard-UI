import { useContext} from "react";
import { ChartContext } from "../../context/ChartProvider";
import "./Header.css";

const Header = () => {
  const { isDropDown, handleDropDown, setIsDropDown, setIsDropDownYear } = useContext(ChartContext);
  return (
    <div className="header-x">
      <div className="user-analytics">
        <div className="main-header">
          <h1>User Analytics</h1>
        </div>
        <div className="content">
          <p>Lorem ipsum dolor sit, adipis.</p>
        </div>
      </div>
      <div className="user-pannel">
        <button className="dropdown-button" onClick={handleDropDown}>
          <p>User</p>
          <span
            className={`material-symbols-outlined ${
              isDropDown === true ? "up" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {isDropDown && (
          <div className="dropdown-content">
            <a href="#">Lorem ipsum dolor sit.</a>
            <a href="#">Lorem make ipsum.</a>
            <a href="#">Lorem, ipsum dolor.</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
