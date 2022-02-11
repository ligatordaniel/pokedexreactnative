import React, { useState, useEffect } from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function PokemonDetailScreen(props: any) {

  const [pokemon, setPokemon] = useState('')
  
  /*
  useEffect(() => {
    (async ()=> {
      try{
        const res = await getPokemonDetailsApi(params.id)
        console.log(res)
      }catch(e){
        navigation.goBack();
      }
    })();
  }, [params]);
  */

  return (
    <SafeAreaView>
      <Text> PokemonDetailScreen</Text>
    </SafeAreaView>
  );
}