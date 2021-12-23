import React from "react";

const Row = ({
  title = "Titulo",
  duration = "Duración",
  rating = "Rating",
  genre  = "género",
  awards = "Premios",
}) => {
  return (
    <React.Fragment>
      <tr>
        <td>{title}</td>
        <td>{duration}</td>
        <td>{rating}</td>
        <td>
          <ul>
             
            {genre.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </td>
        <td>{awards}</td>
      </tr>
    </React.Fragment>
  );
};

export default Row;
