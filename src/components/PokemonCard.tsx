import React from "react";
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

export default function PokemonCard(props: any) {
  const pokemons = props.pokemon;
  console.log("PokemonCard props", props);
  console.log("PokemonCard props", pokemons.name);
  const bgStyle = { backgroudColor: colorByType(pokemons.type1), ...styles.container};

  const goToPokemon = () => {
    //console.log(`vamos al pokemon ${pokemons.name}`);
  };
 
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={bgStyle}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>{pokemons.name}</Text>
          <Text style={styles.topText}>{pokemons.id}</Text> 
        </View>
        <Image source={{ uri: pokemons.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
    padding : 10,
    margin: 1,
    borderRadius: 15,
  },
  topContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "capitalize",
  },
  topText: {
    fontSize: 15,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
  },
});

const colorByType = (type: string) => {
  switch (type) {
    case "normal":
      return "#A8A77A"; //gris
    case "fighting":  //rojo
      return "#C22E28";
    case "flying":  //azul
      return "#2B5DE9";
    case "poison":  //verde
      return "#2ECC71";
    case "ground":  //amarillo
      return "#E1B12C";
    case "rock":  //naranja
      return "#D35400";
    case "bug":  //morado
      return "#8E44AD";
    case "ghost":  //rosa
      return "#9B59B6";
    case "steel":  //cafe
      return "#5D4037";
    case "fire":  //naranja
      return "#E74C3C";
    case "water":  //azul
      return "#3498DB";
    case "grass":  //verde
      return "#2ECC71";
    case "electric":  //amarillo
      return "#F1C40F";
    case "psychic":  //rosa 
      return "#9B59B6";
    case "ice":  //blanco
      return "#ECF0F1";
    case "dragon":  //rosa
      return "#9B59B6";
    case "dark":  // 
      return "#34495E";
    case "fairy":  //rosa
      return "#9B59B6";
    default:  
      return "#A8A77A"; //gris
  }
};

