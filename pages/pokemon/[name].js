import React from "react";
import Meta from "../../components/Meta";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  );
  const { results } = await res.json();

  const paths = results.map((result) => {
    return {
      params: { name: result.name.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Meta title={`PokemonInfo | ${pokemon.name}`} />
      <section>
        <div className="text-center mx-auto" style={{ maxWidth: "350px" }}>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
            className="img-fluid"
          />
          <div className="d-flex justify-content-center my-3">
            <span className="badge bg-success me-1 text-capitalize">
              {pokemon.types[0].type.name}
            </span>
            <span className="badge bg-success ms-1 text-capitalize">
              {pokemon.types[1] && pokemon.types[1].type.name}
            </span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-capitalize">{pokemon.name}</h1>
          <table
            className="table table-hover mx-auto my-3"
            style={{ maxWidth: "500px" }}
          >
            <thead>
              <tr>
                <th scope="col">Stats</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map((stat) => {
                return (
                  <tr>
                    <th className="text-uppercase text-start fw-normal">
                      <span>{stat.stat.name}</span>
                    </th>
                    <th className="fw-normal">{stat.base_stat}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
