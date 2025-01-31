import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, onClick }) => {
  return (
    <button
      className={`mt-4 px-7 py-2 text-[28px] rounded-full border border-primaryLightest text-white
    ${
      type === "primary"
        ? "bg-primary hover:bg-primaryDark"
        : "hover:bg-primaryLight hover:text-primaryDark"
    }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
