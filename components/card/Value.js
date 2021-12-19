import React from "react";

function Value({ title, description }) {
  return (
    <div className="">
      <p className="text-2xl text-center">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Value;
