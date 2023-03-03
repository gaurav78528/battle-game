import React from "react";

const Bar = ({ label, health, maxHealth }) => {
  return (
    <div className="bar-container">
      <div className="label">{label}</div>
      <div
        className="max-health "
        style={{
          width: `${(health / maxHealth) * 100}%`,
          backgroundColor: `${
            health < 50 ? (health <= 30 ? "red" : "orange") : "green"
          }`,
        }}
      ></div>
    </div>
  );
};

export default Bar;
