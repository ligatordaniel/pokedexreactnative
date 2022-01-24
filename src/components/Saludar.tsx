import React from "react";
import { Text } from "react-native";
//import PropTypes from "react-native";

export default function Saludar(props: { firstName: string; lastName: string}) {
    const { firstName, lastName } = props;
    console.log(props);
    return (
        <Text>saludar a {props.firstName} {props.lastName}</Text>
    );
}

Saludar.defaultProps = {
    firstName: "no name",
    lastName: "no surname"
};


/*
// puede servir si no usas typescript
//obliga a que los props tengan un valor tipo string
//obliga a que los props tengan un valor tipo string y requerido
Saludar.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired
};
*/