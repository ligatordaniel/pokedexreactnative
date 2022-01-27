import React from "react";
import { Button, TextInput, Text, FlatList, StyleSheet } from "react-native";

export default function PokemonList(props: any) {
   console.log("PokemonList props", props);
   const { pokemons } = props;
   return (
      <FlatList
         data={pokemons}
         numColumns={2}
         showsVerticalScrollIndicator={false}
         keyExtractor={(item: any) => item.id.toString()}
         renderItem={({ item }) => <Text>{item.name}</Text>}
         style={style.container}
      />
   );
}

const style = StyleSheet.create({
   container: {
      paddingHorizontal: 10,  
   }
})

