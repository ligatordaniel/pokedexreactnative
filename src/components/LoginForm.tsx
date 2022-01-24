import React from "react";
import { Button, TextInput, View } from "react-native";
import Saludar from "./Saludar";

export default function LoginForm() {
    return (
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Contraseña" />
            <Button title="Login" onPress={() => console.log("Enviado Dani")}/>
            <Saludar/>
            <Saludar firstName="Daniel" lastName="Ulloa"/>
            <Saludar/>
        </View>
    );
}


