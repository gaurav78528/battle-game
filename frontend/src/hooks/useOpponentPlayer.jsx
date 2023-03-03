import { useEffect, useState } from "react";

export const useOpponentPlayer = (turn) => {
  const [player, setPlayer] = useState("");
  useEffect(() => {
    if (turn === 1) {
      const options = ["attack", "magic", "heal"];
      setPlayer(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);
};
