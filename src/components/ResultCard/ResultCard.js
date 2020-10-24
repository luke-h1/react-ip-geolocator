import React, { Fragment } from "react";
const ResultCard = (props) => {
  const { ipv4, hostname, country_name } = props;
  return (
    <Fragment>
      <div className="result-container">
        <p>{ipv4}</p>
        <p>{ipv4}</p>
        <p>{hostname}</p>
        <p>{country_name}</p>
      </div>
    </Fragment>
  );
};
export default ResultCard;
