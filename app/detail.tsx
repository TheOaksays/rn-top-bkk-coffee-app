import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
export default function Detail() {
  const params = useLocalSearchParams();
  // 3. เพิ่ม latitude และ longitude เข้ามาในนี้ด้วย
  const { name, district, description, image_url, phone, latitude, longitude } =
    params;
  const handleCall = () => {
    Linking.openURL("tel:${phone}");
  };

  const handleOpenMap = () => {
    // สร้าง URL สำหรับ Google Maps และ Apple Maps
    const googleMapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
    const appleMapsUrl = `maps://maps.apple.com/?q=${params.name}&ll=${latitude},${longitude}`;

    Linking.canOpenURL(googleMapsUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(googleMapsUrl);
        } else {
          Linking.openURL(appleMapsUrl);
        }
      })
      .catch(() => {
        // Fallback to web Google Maps
        Linking.openURL(`https://maps.google.com/?q=${latitude},${longitude}`);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image_url as string }} style={styles.coverImage} />

      <Text style={styles.nameSty}>{name}</Text>
      <Text style={styles.districtSty}>📍 {district}</Text>
      <Text style={styles.descriptionSty}>📌 {description}</Text>

      {/* 4. แก้ TouchableOpacity และ style={styles...} */}
      <TouchableOpacity style={styles.btnPhoneSty} onPress={handleCall}>
        <Text style={styles.phoneSty}>📞{phone}</Text>
      </TouchableOpacity>

      <Text style={[styles.nameSty, { fontSize: 15 }]}>แผนที่ร้าน</Text>

      <MapView
        style={{ height: 300, marginVertical: 20, marginHorizontal: 20 }}
        initialRegion={{
          longitude: parseFloat(longitude as string) || 0,
          latitude: parseFloat(latitude as string) || 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(latitude as string) || 0,
            longitude: parseFloat(longitude as string) || 0,
          }}
          title={name as string}
          onPress={handleOpenMap}
        />
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // อย่าลืมเพิ่ม container, coverImage และ nameSty ที่หายไปในนี้ด้วยครับ
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverImage: {
    width: "100%",
    height: 250,
  },
  nameSty: {
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  btnPhoneSty: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    backgroundColor: "#1ba803",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  phoneSty: {
    fontFamily: "Kanit_400Regular",
    fontSize: 18,
    color: "#fff",
  },
  descriptionSty: {
    fontFamily: "Kanit_400Regular",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  districtSty: {
    fontFamily: "Kanit_400Regular",
    color: "#747474",
    marginLeft: 20,
  },
});
