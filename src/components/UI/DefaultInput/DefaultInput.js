import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[
      styles.input,
      props.style,
      !props.valid && props.touched ? styles.inValid : null
    ]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "#eee",
    borderWidth: 1,
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  },
  inValid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default defaultInput;
