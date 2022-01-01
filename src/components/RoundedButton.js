import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={[styles(size).radius, style]}
            onPress={() => {
                props.onPress();
            }}
        >
            <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = (size) =>
    StyleSheet.create({
        radius: {
            borderRadius: 10,
            width: size,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#000",
            borderWidth: 2,
        },
        text: {
            color: "#000",
            fontSize: size / 4,
        },
    });
