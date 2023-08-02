import React from "react";
import { HiArrowUp } from "react-icons/hi2";

function BtnTop() {
  return (
    <div className="fixed left-5 bottom-5">
      <a href="#top">
        <button className="bg-itbs-default rounded-full p-4">
          <HiArrowUp className="text-white text-lg" />
        </button>
      </a>
    </div>
  );
}

export default BtnTop;
