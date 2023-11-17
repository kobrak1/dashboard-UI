import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ChartContext = createContext();

const ChartProvider = ({ children }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isDropDownYear, setIsDropDownYear] = useState(false);
  const [totalVisits, setTotalVisits] = useState(3289);

  //   the function to handle dropdown
  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  const handleDropDownYear = () => {
    setIsDropDownYear(!isDropDownYear);
  };

  // handle totalVisits
  const handleTotalVisits = (number) => {
    setTotalVisits(number)
  }

  return (
    <ChartContext.Provider
      value={{
        isDropDown,
        isDropDownYear,
        handleDropDown,
        handleDropDownYear,
        totalVisits,
        setTotalVisits,
        handleTotalVisits
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
