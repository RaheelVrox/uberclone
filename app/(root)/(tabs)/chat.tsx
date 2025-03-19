import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";

const Chat = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Chat</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.message}
            style={{ width: "100%", height: 160 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 12 }}>
            No Messages Yet
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              textAlign: "center",
              paddingHorizontal: 28,
            }}
          >
            Start a conversation with your friends
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
