import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigations/NavigationStack';
import NavigationTab from './src/navigations/NavigationTab';
import NavigationDrawer from './src/navigations/NavigationDrawer';

function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}

export default App;

//<NavigationStack /> permite navergar entre las pantallas
//<NavigationTab /> permite navegar entre las pantallas con tabs
//<NavigationDrawer /> permite navegar entre las pantallas con el menu lateral