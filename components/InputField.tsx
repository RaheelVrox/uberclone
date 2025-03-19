import React, { useState, forwardRef } from "react";
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
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

export interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: ImageSourcePropType;
  secureTextEntry?: boolean;
  labelStyle?: object;
  containerStyle?: object;
  inputStyle?: object;
  iconStyle?: object;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      label,
      icon,
      secureTextEntry = false,
      labelStyle,
      containerStyle,
      inputStyle,
      iconStyle,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
                ref={ref}
                style={[styles.input, inputStyle]}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
              />
              {secureTextEntry && (
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  style={styles.eyeIconContainer}
                >
                  <Feather
                    name={isPasswordVisible ? "eye-off" : "eye"}
                    size={24}
                    color="#6B7280"
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontFamily: "Jakarta-Medium",
    marginBottom: 7,
    color: "#000000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    paddingHorizontal: 16,
    // paddingVertical: 12,
    padding: 9,
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
  eyeIconContainer: {
    padding: 5,
  },
  eyeIcon: {
    paddingRight: 5,
  },
});

export default InputField;
