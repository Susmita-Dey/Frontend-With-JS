import React, { useState } from "react";
import Jug from "./jug";

const Filler = () => {
  const [fillingPercentage, setFillingPercentage] = useState(0);
  const [disableFill, setDisableFill] = useState(false);
  const [disableEmpty, setDisableEmpty] = useState(true);

  const fillJug = () => {
    console.log("Filling the jug...");
    setFillingPercentage((prev) => {
      if (prev === 0) {
        setDisableEmpty(false);
        return 1;
      }

      const change = prev + prev * 0.4;
      if (change > 100) {
        setDisableFill(true);
        return 100;
      }
      return change;
    });
  };

  const emptyJug = () => {
    console.log("Emptying the jug...");
    setFillingPercentage((prev) => {
      if (prev <= 1) {
        setDisableEmpty(true);
        return 0;
      }
      const change = prev - prev * 0.2;
      if (change < 100) {
        setDisableFill(false);
      }
      return change;
    });
  };

  return (
    <div>
      <Jug fillWaterInJug={fillingPercentage} />
      <div className="my-3 flex justify-center items-center">
        <button
          className="w-[50px] h-[50px] bg-green-700 rounded-full mx-1"
          onClick={fillJug}
          disabled={disableFill}
          style={disableFill ? { cursor: "not-allowed", backgroundColor:"greenyellow" } : {}}
        >
          <span className="text-white">&#8593;</span>
        </button>

        <button
          className="w-[50px] h-[50px] bg-red-700 rounded-full mx-1"
          onClick={emptyJug}
          disabled={disableEmpty}
          style={disableEmpty ? { cursor: "not-allowed", backgroundColor: "crimson" } : {}}
        >
          <span className="text-white">&#8595;</span>
        </button>
      </div>
    </div>
  );
};

export default Filler;
