import React, { useState } from "react";

const Movie1 = () => {
  const values = [
    "Golmaal3",
    "De Dana Dan",
    "Phir Hera Pheri",
    "Golmaal Return",
    "Double Dhamaal",
  ];

  const [movies, setMovies] = useState(values);

  return (
    <>
      <div>
        {movies.map((x) => {
          return <div key={x}>Films are : {x}</div>;
        })}
      </div>
    </>
  );
};

export default Movie1;
