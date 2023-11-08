import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ChartContext = createContext();

const ChartProvider = ({ children }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isDropDownYear, setIsDropDownYear] = useState(false);

  //   the function to handle dropdown
  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  const handleDropDownYear = () => {
    setIsDropDownYear(!isDropDownYear);
  };
  return (
    <ChartContext.Provider
      value={{
        isDropDown,
        isDropDownYear,
        handleDropDown,
        handleDropDownYear,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};

ChartProvider.propTypes = {
  children: PropTypes.node,
};

export default ChartProvider;
