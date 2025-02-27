import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });
  // Create refs for each input field
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={images.signUpCar} style={styles.image} />
          <Text style={styles.title}>Create Your Account</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <InputField
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value: string) => setForm({ ...form, name: value })}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
          blurOnSubmit={false}
        />
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value: string) => setForm({ ...form, email: value })}
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={icons.lock}
          secureTextEntry
          textContentType="password"
          value={form.password}
          onChangeText={(value: string) =>
            setForm({ ...form, password: value })
          }
          ref={passwordRef}
          returnKeyType="done"
        />
        <CustomButton title="Sign Up" style={styles.button} />
        <OAuth />
        <Link href="/sign-in" style={styles.link}>
          Already have an account?{" "}
          <Text style={styles.linkHighlight}>Log In</Text>
        </Link>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="#ccc" />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  imageContainer: { position: "relative", width: "100%", height: 250 },
  image: { width: "100%", height: 250 },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "600",
    position: "absolute",
    bottom: 20,
    left: 20,
    fontFamily: "Jakarta-SemiBold",
  },
  formContainer: { marginHorizontal: 20 },
  button: { marginTop: 24, alignSelf: "center" },
  linkHighlight: {
    color: "#3B82F6",
    fontFamily: "Jakarta-SemiBold",
    fontSize: 17,
  },
  link: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
    color: "#6B7280",
    fontFamily: "Jakarta",
  },
});
