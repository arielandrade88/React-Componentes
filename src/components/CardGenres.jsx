import React from "react";

const CardGenres = ({ genre = "genre" }) => {
  return (
    <div class="card bg-dark text-white shadow">
      <div class="card-body">{genre}</div>
    </div>
  );
};

export default CardGenres;
