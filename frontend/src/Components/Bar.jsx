import React from "react";

const Bar = ({ label, health, maxHealth }) => {
  return (
    <div className="bar-container">
      <div className="label">{label}</div>
      <div
        className="max-health "
        style={{ width: `${(health / maxHealth) * 100}%` }}
      ></div>
    </div>
  );
};

export default Bar;
