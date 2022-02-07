import React, { useState, useEffect } from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { getPokemonApi, getPokemonDetailByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

/*interface pokemonDetail { 
    id: number,
    name: string,
    sprites: any,
    types: any[],
    moves: any[],
  }
*/

export default function PokemonScreen() { 
  
  const [pokemons, setPokemons] = useState<any>([])

  useEffect(()=>{
    (async () => {
      await loadPokemons()
    })();
  }, []);

  const loadPokemons = async() => {
    try{
      let res:any = await getPokemonApi()
      res = res.results
      //console.log('pokemon19',res.results)
      const pokemonsArray = []
        for await (const pokemon of res){
          //console.log('pokemon23', pokemon)
          const pokemonDetail: any = await getPokemonDetailByUrlApi(pokemon.url)
          console.log('pokemonDetail25',pokemonDetail)
          pokemonsArray.push({
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            image: pokemonDetail.sprites.other["official-artwork"].front_default,
            type1: pokemonDetail.types[0].type.name ? pokemonDetail.types[0].type.name : '',
            //type2: pokemonDetail.types[1].type.name ? pokemonDetail.types[1].type.name : '',
            move1: pokemonDetail.moves[0].move ? pokemonDetail.moves[0].move: '',
            move2: pokemonDetail.moves[1].move ? pokemonDetail.moves[1].move: ''
          })
        }
      setPokemons([...pokemons, ...pokemonsArray])
      //console.log('pokemons44',pokemonsArray)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );

}