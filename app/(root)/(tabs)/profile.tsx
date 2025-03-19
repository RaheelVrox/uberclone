import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/InputField";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ paddingHorizontal: 20 }}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text
          style={{
            fontSize: 22,
            marginVertical: 20,
            fontFamily: "Jakarta-Bold",
          }}
        >
          My profile
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // marginVertical: 20,
          }}
        >
          <Image source={require("@/assets/images/image.png")} />
        </View>

        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 10,
            shadowColor: "#D1D5DB",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
        >
          <View style={{ width: "100%" }}>
            <InputField
              label="First name"
              placeholder="Enter First name"
              containerStyle={{ width: "100%" }}
              editable={false}
            />

            <InputField
              label="Last name"
              placeholder="Enter Last name"
              containerStyle={{ width: "100%" }}
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={"Enter Email"}
              containerStyle={{ width: "100%" }}
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder="Enter Phone"
              containerStyle={{ width: "100%" }}
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
