import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props: any) {
   //console.log("PokemonList props", props);
   const { pokemons } = props;
   return (
      <FlatList
         data={pokemons}
         numColumns={2}
         showsVerticalScrollIndicator={false}
         keyExtractor={(item: any) => item.id.toString()}
         renderItem={ ({ item }) => <PokemonCard pokemon={item} /> }
         style={style.container}
      />
   );
}

const style = StyleSheet.create({
   container: {
      paddingHorizontal: 10,  
   }
})

