import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";

export default function AccountScreen(props:any) {
  //console.log(props)
  const { navigation } = props;
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text> Account</Text>
      <Button title="Go to settings" onPress={goToSettings} />
    </SafeAreaView>
  );
}