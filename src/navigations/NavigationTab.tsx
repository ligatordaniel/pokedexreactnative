import * as React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab(){

  return (
    <Tab.Navigator initialRouteName='Pokedex'>

      <Tab.Screen 
        name="Favorite" 
        component={FavoriteScreen} 
        options={{
          tabBarLabel: "Favoritos",
          //tabBarBadge: 3,
          tabBarIcon: ({color, size}) => (
            <Icon name="heart"  color= {color} size={size}/>
          ),
        }}
      />

      <Tab.Screen 
        name="Pokedex" 
        component={PokedexScreen} 
        options={{
          tabBarLabel: () => renderImgPokeball()
        }}
      />

      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({color, size}) => (
            <Icon name="user"  color= {color} size={size}/>
          ),
        }}
      /> 

    </Tab.Navigator>
  );
}

function renderImgPokeball(){
  return(
    <Image
      source={require('../../assets/pokeball.png')}
      style={{ width: 76,  height: 76, top: -15 }}
    />
  )
}