import { router } from "expo-router";
import { Alert, Image, Text, View, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  return (
    <View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      <CustomButton
        title="Log In with Google"
        style={styles.button}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.icon}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        // onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;

const styles = StyleSheet.create({
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D1D5DB",
  },
  orText: {
    fontSize: 18,
    color: "#374151",
    fontFamily: "Jakarta",
  },
  button: {
    marginTop: 20,
    // width: "100%",
    marginHorizontal: 20,
    elevation: 0,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});
