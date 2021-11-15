import React from "react";
import Meta from "../components/Meta";

const About = () => {
  return (
    <>
      <Meta title="PokemonInfo | About" />
      <section>
        <div className="my-3">
          <h3>Technology Used: </h3>
          <p>Next.js, React.js, and Bootstrap 5</p>
        </div>
        <div className="my-3">
          <h3>API Used: </h3>
          <a href="https://pokeapi.co/" target="_blank">
            PokeAPI
          </a>
        </div>
        <div className="my-3">
          <h3>Source Code: </h3>
          <a href="github.com/hisyamsk/pokemon-info" target="_blank">
            Github
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
