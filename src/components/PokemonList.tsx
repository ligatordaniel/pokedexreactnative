import React from "react";
import { FlatList, Platform, StyleSheet, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props: any) {
   //console.log("PokemonList props", props);
   //console.log(Platform.OS);

   //traemos por props data llamada pokemons y la funcion loadPokemons
   const { pokemons, loadPokemons } = props;
   
   const infiniteScreenLoading = () => {
       loadPokemons()
   };

   return (
      <FlatList
         data={pokemons}
         numColumns={2}
         showsVerticalScrollIndicator={false}
         keyExtractor={(item: any) => item.id.toString()}
         renderItem={ ({ item }) => <PokemonCard pokemon={item} /> }
         style={styles.container}

         onEndReached={infiniteScreenLoading}
         onEndReachedThreshold={0.1}
         ListFooterComponent={
          <ActivityIndicator 
            size="large" 
            style={styles.spinner}
            color="#AEAEAE"
          />
         }
      />
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 10, 
      marginTop: Platform.OS === "ios" ? 30 : 0,
   },
   spinner: {
     marginTop: 19,
     marginBottom: 60,
   },
})

