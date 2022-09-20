import PropTypes from "prop-types";
import React from "react";

const Footer = ({ children, normal }) => {
  console.log(children);
  return (
    <div>
      <h1>{normal}</h1>
      {React.Children.toArray(children.map((el) => <h1>{el}</h1>))}
    </div>
  );
};

Footer.propTypes = {
  normal: PropTypes.string,
};

export default Footer;
