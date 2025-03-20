import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import RideCard from "@/components/RideCard";
import AntDesign from "@expo/vector-icons/AntDesign";

const Rides = () => {
  const recentRides = [
    {
      id: "1",
      pickup: "123 Main St, New York",
      dropoff: "456 Broadway, New York",
      date: "Feb 25, 2025",
      time: "10:30 AM",
      price: "$12.50",
    },
    {
      id: "2",
      pickup: "789 Park Ave, New York",
      dropoff: "101 5th Ave, New York",
      date: "Feb 24, 2025",
      time: "3:45 PM",
      price: "$9.80",
    },
    {
      id: "3",
      pickup: "456 Elm St, Brooklyn",
      dropoff: "789 Ocean Ave, Brooklyn",
      date: "Feb 23, 2025",
      time: "6:15 PM",
      price: "$15.30",
    },
  ];

  const loading = false;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => (
          <RideCard
            ride={{
              origin_address: item.pickup,
              destination_address: item.dropoff,
              origin_latitude: 40.7128,
              origin_longitude: -74.006,
              destination_latitude: 40.7306,
              destination_longitude: -73.9352,
              created_at: new Date().toISOString(),
              ride_time: new Date(`${item.date} ${item.time}`).getTime(),
              payment_status: "paid",
              fare_price: parseFloat(item.price.replace("$", "")),
              driver_id: 123,
              user_id: "user456",
              driver: { first_name: "Jane", last_name: "Cooper", car_seats: 4 },
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.welcomeText}>Popular Car</Text>

              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => console.log("Dropdown Pressed")}
              >
                <Text style={styles.ascending}>Ascending</Text>
                <AntDesign
                  name="down"
                  size={18}
                  color="#0286FF"
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  contentContainer: {
    paddingBottom: 100,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noResultImage: {
    width: 160,
    height: 160,
  },
  noResultText: {
    fontSize: 14,
    color: "#333",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
    alignContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ascending: {
    fontSize: 17,
    color: "#0286FF",
  },
  signOutButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  signOutIcon: {
    width: 16,
    height: 16,
  },
  searchContainer: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  mapContainer: {
    height: 300,
    backgroundColor: "transparent",
    marginHorizontal: 20,
  },
});

export default Rides;
