import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useAppContext } from "../../../context/AppContext";
import Svg, { Polygon } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function FourtView() {
  const router = useRouter();
  const { setActiveView } = useAppContext();

  useEffect(() => {
    setActiveView(3);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Textos centrados */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>App Exclusiva para Latam</Text>
          <Text style={styles.description}>
            tudealer App es la primera red social Cannábica de todo latinoamérica...
          </Text>
        </View>

        {/* Dots + Play */}
        <View style={styles.progressRow}>
          <View style={styles.dotsContainer}>
            <TouchableOpacity onPress={() => router.push('/intro/v1')}>
              <View style={styles.dot} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/intro/v2')}>
              <View style={styles.dot} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/intro/v3')}>
              <View style={styles.dot} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/intro/v4')}>
              <View style={[styles.dot, styles.activeDot]} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() => router.push("/auth/login")}
          >
            <Svg width={20} height={20} viewBox="0 0 100 100">
              <Polygon points="40,30 70,50 40,70" fill="#fff" />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: "#1B4F37",
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#c7c7c7",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#5c7a70",
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 10,
    width: "100%",
  },
  dotsContainer: {
    flexDirection: "row",
  },
  dot: {
    width: 20,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#c7c7c7",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#5e5e5e",
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#c7c7c7",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
