import React from "react";
import { FlatList, Platform, StyleSheet, } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props: any) {
   //console.log("PokemonList props", props);
   console.log(Platform.OS);

   const infiniteScreenLoading = () => {
       console.log("infiniteLoading");
   };

   const { pokemons } = props;
   return (
      <FlatList
         data={pokemons}
         numColumns={2}
         showsVerticalScrollIndicator={false}
         keyExtractor={(item: any) => item.id.toString()}
         renderItem={ ({ item }) => <PokemonCard pokemon={item} /> }
         style={style.container}
         onEndReached={infiniteScreenLoading}
         onEndReachedThreshold={0.1}
      />
   );
}

const style = StyleSheet.create({
   container: {
      padding: 10, 
      marginTop: Platform.OS === "ios" ? 30 : 0,
   },

})

