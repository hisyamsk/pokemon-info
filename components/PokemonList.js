import React, { useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons }) => {
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(15);

  const handlePrev = () => {
    if (prev !== 0) {
      setPrev(prev - 15);
      setNext(next - 15);
    }
  };

  const handleNext = () => {
    if (next !== 150) {
      setPrev(prev + 15);
      setNext(next + 15);
    }
  };

  return (
    <div className="border rounded">
      <h2 className="text-center my-5">Pokemon List</h2>
      <section className="row justify-content-center my-3">
        {pokemons.slice(prev, next).map((pokemon, index) => {
          return <Pokemon key={index} pokemon={pokemon} id={index + 1} />;
        })}
      </section>
      <section className="d-flex justify-content-center my-3">
        <button className="btn btn-primary me-2" onClick={handlePrev}>
          &larr;
        </button>
        <button className="btn btn-primary ms-2" onClick={handleNext}>
          &rarr;
        </button>
      </section>
    </div>
  );
};

export default PokemonList;
