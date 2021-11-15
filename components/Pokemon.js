import React from "react";
import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="card col-3 m-2" style={{ width: "18rem" }}>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <div className="card-body text-center">
        <h4 className="card-title text-capitalize">{pokemon.name}</h4>
        <Link href={`/pokemon/${pokemon.name}`}>
          <button className="btn btn-secondary mt-2">
            <a>More Info</a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
