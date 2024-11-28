import React from "react";

function PromoCard() {
  return (
    <div className="bg-green border-rounded-10 green-card p-3 h-100">
      <div className="card-body">
        <h5 className="text-black fw-bold mb-3">Gym Management Tool</h5>
        <p className="text-black fs-12 fw-300">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.
        </p>
        <button className="btn btn-dark fs-12 px-4">Explore</button>
      </div>
    </div>
  );
}

export default PromoCard;
