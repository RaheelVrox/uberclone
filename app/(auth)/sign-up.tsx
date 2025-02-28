import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
  Modal,
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
          onChangeText={(value) => setForm({ ...form, name: value })}
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
          onChangeText={(value) => setForm({ ...form, email: value })}
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
          onChangeText={(value) => setForm({ ...form, password: value })}
          ref={passwordRef}
          returnKeyType="done"
        />
        <CustomButton
          title="Sign Up"
          style={styles.button}
          onPress={() =>
            setVerification({
              state: "success",
              error: "",
              code: "12345",
            })
          }
        />
        <OAuth />
        <Link href="/sign-in" style={styles.link}>
          Already have an account?{" "}
          <Text style={styles.linkHighlight}>Log In</Text>
        </Link>
      </View>
      {/* Verification Modal */}
      <Modal visible={verification.state === "success"} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Verification</Text>
            <Text style={styles.modalText}>
              We've sent a verification code to {form.email}.
            </Text>
            <View style={{ width: "100%" }}>
              <InputField
                label="Enter Code"
                icon={icons.lock}
                placeholder="12345"
                value={verification.code}
                keyboardType="numeric"
                onChangeText={(code) =>
                  setVerification({ ...verification, code })
                }
              />
            </View>
            {verification.error ? (
              <Text style={styles.errorText}>{verification.error}</Text>
            ) : null}
            <CustomButton
              title="Verify Email"
              onPress={() => {
                if (verification.code === "12345") {
                  setShowSuccessModal(true);
                  setVerification({ state: "default", error: "", code: "" });
                } else {
                  setVerification({ ...verification, error: "Invalid Code" });
                }
              }}
              style={styles.verifyButton}
            />
          </View>
        </View>
      </Modal>
      {/* Success Modal */}
      <Modal visible={showSuccessModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={images.check} style={styles.successImage} />
            <Text style={styles.modalTitle}>Verified!</Text>
            <Text style={styles.successText}>
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => {
                setShowSuccessModal(false);
                router.push(`/(root)/(tabs)/home`);
              }}
            />
          </View>
        </View>
      </Modal>
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
    fontFamily: "Jakarta-SemiBold",
    bottom: 20,
    left: 20,
  },
  formContainer: { marginHorizontal: 20 },
  button: { marginTop: 24, alignSelf: "center" },
  linkHighlight: { color: "#3B82F6", fontWeight: "600", fontSize: 17 },
  link: { fontSize: 18, textAlign: "center", marginTop: 40, color: "#6B7280" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
  },
  modalTitle: {
    marginBottom: 10,
    color: "#000000",
    fontSize: 22,
    fontFamily: "Jakarta-SemiBold",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    fontFamily: "Jakarta",
  },
  successText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    fontFamily: "Jakarta",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    fontFamily: "Jakarta",
  },
  verifyButton: { marginTop: 10, backgroundColor: "#0286FF", width: "100%" },
  successImage: { width: 80, height: 80, marginVertical: 10 },
});
