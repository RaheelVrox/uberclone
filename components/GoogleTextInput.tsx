import {
  View,
  TextInput,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type";
import { useState } from "react";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={[styles.container, containerStyle as ViewStyle]}>
      <View style={styles.iconContainer}>
        <Image
          source={icon ? icon : icons.search}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      <TextInput
        style={[
          styles.textInput,
          { backgroundColor: textInputBackgroundColor || "white" },
        ]}
        placeholder={initialLocation ?? "Where do you want to go?"}
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 20,
    shadowColor: "#d4d4d4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default GoogleTextInput;
