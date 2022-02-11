import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
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
  
  //estado, una funciona actualizadora del estado, su valor inicial
  const [pokemons, setPokemons] = useState<any>([])
  const [nextUrl, setNextUrl] = useState('')

  useEffect(()=>{
    (async () => {
      await loadPokemons()
    })();
  }, []);

  const loadPokemons = async() => {
    try{
      console.log(nextUrl)
      let res:any = await getPokemonApi(nextUrl)
      setNextUrl(res.next) // url de la siguiente pagina
      res = res.results
      if(!res.next){
        setNextUrl('No more pages')
      }


      const pokemonsArray = []
        for await (const pokemon of res){
          const pokemonDetail: any = await getPokemonDetailByUrlApi(pokemon.url)

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
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
    </SafeAreaView>
  );


}