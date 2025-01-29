/* eslint-disable @next/next/no-img-element */
import React from "react";

function Tile({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center border border-green-600/40 h-[250px] w-[250px] pointer-events-auto relative cursor-pointer bg-green-500/20 hover:bg-green-600/50"
    >
      <img className="w-full h-full" src="edifices/2.png" alt="edifice" />
    </button>
  );
}

export default Tile;
