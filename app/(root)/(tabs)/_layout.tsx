import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  View,
  StyleSheet,
  Keyboard,
} from "react-native";
import { icons } from "@/constants";
import { useEffect, useState } from "react";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
    <View style={[styles.innerCircle, focused && styles.innerCircleFocused]}>
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        style={styles.icon}
      />
    </View>
  </View>
);

export default function Layout() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: isKeyboardVisible ? { display: "none" } : styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#333333",
    borderRadius: 50,
    paddingBottom: 0,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 20,
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerFocused: {
    backgroundColor: "#333333",
  },
  innerCircle: {
    borderRadius: 50,
    padding: 8,
    backgroundColor: "#333333",
    marginBottom: 27,
    alignItems: "center",
  },
  innerCircleFocused: {
    backgroundColor: "#0CC25F",
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
  },
});
