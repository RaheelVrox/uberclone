import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";

export interface InputFieldProps {
  label: string;
  icon?: ImageSourcePropType;
  secureTextEntry?: boolean;
  labelStyle?: object;
  containerStyle?: object;
  inputStyle?: object;
  iconStyle?: object;
  value?: string;
  onChangeText?: (text: string) => void;
}

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, containerStyle]}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          <View
            style={[
              styles.inputContainer,
              isFocused && styles.inputContainerFocused,
            ]}
          >
            {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
            <TextInput
              style={[styles.input, inputStyle]}
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontFamily: "Jakarta-Medium",
    marginBottom: 7,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  inputContainerFocused: {
    borderColor: "#3B82F6",
    borderWidth: 1,
  },
  icon: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Jakarta-Medium",
    textAlign: "left",
  },
});

export default InputField;
