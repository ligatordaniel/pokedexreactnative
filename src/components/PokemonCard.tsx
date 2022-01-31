import React from "react";
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

export default function PokemonCard(props: any) {
  const pokemons = props.pokemon;
  console.log("PokemonCard props", props);
  console.log("PokemonCard props", pokemons.name);

  const goToPokemon = () => {
    console.log(`vamos al pokemon ${pokemons.name}`);
  };
 
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <Text>{pokemons.name}</Text>
        <Image source={{ uri: pokemons.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    padding : 10,
    backgroundColor: "#95D3D2",
  },
  image: {
    width: 100,
    height: 100,
  },
});