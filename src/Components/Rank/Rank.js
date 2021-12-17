import React from "react";

const Rank = ({ user }) => {
  const { name, entries } = user;

  return (
    <div>
      <div className="white f3">{`${name}, you already submited`}</div>
      <div className="white f1">{`${entries} images`}</div>
    </div>
  );
};

export default Rank;
