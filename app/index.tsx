import { useRouter } from "expo-router"; // แก้ไข: เพิ่ม useRouter
import React, { useEffect } from "react"; // แก้ไข: เพิ่ม useEffect
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  //----------หน่วงเวลาหน้าจอ 3 วินาที-------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);
  }, []);
  //-------------------------------------------------------

  return (
    <View style={styles.container}>
      {/* แสดงรูปกาแฟ */}
      <Image
        source={require("@/assets/images/coffeeshop.png")}
        style={styles.imgSty}
      />

      {/* ชื่อแอป */}
      <Text style={styles.txtSty1}>TOP BKK COFFEE</Text>

      {/* ข้อความทั่วไป */}
      <Text style={styles.txtSty2}>ที่สุดของร้านกาแฟในกรุงเทพฯ</Text>

      {/* ไอคอนโหลดวงกลม */}
      <ActivityIndicator
        size="large"
        color="#4f1c02"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // เพิ่มสีพื้นหลังสีขาว
  },
  imgSty: {
    width: 150,
    height: 150,
    borderRadius: 75, // ปรับให้รูปดูสมส่วนขึ้น (ถ้าเป็นวงกลม)
  },
  txtSty1: {
    fontFamily: "Kanit_700Bold",
    fontSize: 30,
    marginTop: 20,
    color: "#4f1c02",
  },
  txtSty2: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#747474",
    marginTop: 5,
  },
});
