import React from "react";

const BattleMenu = ({ onAttack, onMagic, onHeal }) => {

  return (
    <div className="battle-menu">
      <button onClick={onAttack} className="btn">
        Attack
      </button>
      <button onClick={onMagic} className="btn">
        Magic
      </button>
      <button onClick={onHeal} className="btn">
        Heal
      </button>
    </div>
  );
};

export default BattleMenu;
