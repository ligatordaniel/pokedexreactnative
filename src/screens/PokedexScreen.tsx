import React, { useState, useEffect } from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { getPokemonApi, getPokemonDetailByUrlApi } from "../api/pokemon";

export default function PokemonScreen() { 
  
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    (async () => {
      await loadPokemons()
    })();
  }, []);

  const loadPokemons = async() => {
    try{
      let res = await getPokemonApi()
      const pokemons = res.results
      //console.log('pokemon19',res.results)
      const pokemonsArray = []
        for await (const pokemon of pokemons){
          //console.log('pokemon23', pokemon)
          const pokemonDetail = await getPokemonDetailByUrlApi(pokemon.url)
          //console.log('pokemonDetail25',pokemonDetail)
          pokemonsArray.push({
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            image: pokemonDetail.sprites.other['official-artwork'].font_default,
            type1: pokemonDetail.types[0].type.name ? pokemonDetail.types[0].type.name : '',
            type2: pokemonDetail.types[1].type.name ? pokemonDetail.types[1].type.name : '',
            move1: pokemonDetail.moves[0].move ? pokemonDetail.moves[0].move: '',
            move2: pokemonDetail.moves[1].move ? pokemonDetail.moves[1].move: ''
          })
        }
      setPokemons([...pokemons, ...pokemonsArray])
      console.log('pokemons36',pokemonsArray)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <SafeAreaView>
      <Text> pokedex screen</Text>
    </SafeAreaView>
  );

}