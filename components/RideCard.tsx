import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { formatDate, formatTime } from "@/lib/utils";
import { icons } from "@/constants";
import { Ride } from "@/types/type";

const dummyRide: Ride = {
  origin_address: "123 Main St, New York, NY",
  destination_address: "456 Park Ave, New York, NY",
  destination_latitude: 40.7128,
  destination_longitude: -74.006,
  created_at: "2024-02-28T10:00:00Z",
  ride_time: Date.parse("2024-02-28T11:00:00Z"),
  payment_status: "paid",
  driver: {
    first_name: "John",
    last_name: "Doe",
    car_seats: 4,
  },
  origin_latitude: 0,
  origin_longitude: 0,
  fare_price: 0,
  driver_id: 0,
  user_id: "",
};

const RideCard = ({ ride = dummyRide }: { ride?: Ride }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require("@/assets/images/Map.png")}
            style={styles.mapImage}
          />

          <View style={styles.details}>
            <View style={styles.infoRow}>
              <Image source={icons.to} style={styles.icon} />
              <Text style={styles.text} numberOfLines={1}>
                {ride.origin_address}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Image source={icons.point} style={styles.icon} />
              <Text style={styles.text} numberOfLines={1}>
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Date & Time</Text>
            <Text style={styles.value}>
              {formatDate(ride.created_at)} 3:45 PM
            </Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Driver</Text>
            <Text style={styles.value}>
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Car Seats</Text>
            <Text style={styles.value}>{ride.driver.car_seats}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Payment Status</Text>
            <Text
              style={[
                styles.value,
                ride.payment_status === "paid" ? styles.paid : styles.unpaid,
              ]}
            >
              {ride.payment_status === "paid" ? "Paid" : "Unpaid"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
    marginHorizontal: 12,
  },
  container: {
    padding: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  mapImage: {
    width: 80,
    height: 90,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 12,
    gap: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
  },
  infoBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
  value: {
    fontSize: 14,
    fontWeight: "700",
  },
  paid: {
    color: "green",
  },
  unpaid: {
    color: "red",
  },
  divider: {
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 6,
  },
});

export default RideCard;
