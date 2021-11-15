import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import PokemonList from "../components/PokemonList";

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
    );
    const data = await response.json();
    const { results } = data;
    const pokemons = results.map((item, index) => {
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        index + 1
      }.png`;
      return {
        ...item,
        imageUrl,
      };
    });

    return {
      props: {
        pokemons,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default function Home({ pokemons }) {
  return <PokemonList pokemons={pokemons} />;
}
