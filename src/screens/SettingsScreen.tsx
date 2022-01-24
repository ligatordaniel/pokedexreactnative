import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";

export default function SettingsScreen(props: any) {
  //console.log(props)
  const { navigation } = props;
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <Text> Settings screen</Text>
      <Text> Settings screen</Text>
      <Text> Settings screen</Text>
      <Button title="Go to home" onPress={goToHome} />
    </SafeAreaView>
  );
}