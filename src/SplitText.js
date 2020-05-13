import React from "react";
import PropTypes from "prop-types";

const SplitText = ({ copy, role }) => {
  const children = copy.split("").map((char, index) => (
    <span aria-hidden="true" key={char + index}>
      {char}
    </span>
  ));

  return (
    <span aria-label={copy} role={role}>
      {children}
    </span>
  );
};

SplitText.propTypes = {
  copy: PropTypes.string.isRequired,
  role: PropTypes.string
};

SplitText.defaultProps = {
  role: "heading"
};

export default SplitText;
