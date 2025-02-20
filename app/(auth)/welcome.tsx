import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        style={styles.skipButton}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        style={styles.button}
      />
      <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skipButton: {
    width: "100%",
    alignItems: "flex-end",
    padding: 20,
  },
  skipText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Jakarta-Bold",
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#0286FF",
    borderRadius: 4,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 40,
  },
  title: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: "JakartaSemiBold",
    color: "#858585",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    width: "90%",
    marginTop: 40,
    marginBottom: 20,
  },
});
