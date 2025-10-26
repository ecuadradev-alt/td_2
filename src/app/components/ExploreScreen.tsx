import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExploreScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Explorar</Text>
          <Text style={styles.subtitle}>Hola Camilo</Text>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#777" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar comercios y farmacias"
          placeholderTextColor="#888"
          onFocus={() => navigation.navigate("SearchResults")}
        />
        <TouchableOpacity>
          <Ionicons name="options-outline" size={20} color="#777" />
        </TouchableOpacity>
      </View>

      {/* Comercio destacado */}
      <Text style={styles.sectionTitle}>Comercio de la semana</Text>
      <TouchableOpacity style={styles.featuredCard}>
        <Image
          source={{ uri: "https://picsum.photos/600/300?1" }}
          style={styles.featuredImage}
        />
        <View style={styles.featuredInfo}>
          <Text style={styles.storeName}>Casita 420</Text>
          <Text style={styles.rating}>⭐ 4.5</Text>
        </View>
      </TouchableOpacity>

      {/* Tiendas cerca */}
      <Text style={styles.sectionTitle}>Tiendas cerca a ti</Text>
      <View style={styles.storesRow}>
        {[
          { id: 1, name: "Mifarma", img: "https://picsum.photos/200/200?2" },
          { id: 2, name: "Inkafarma", img: "https://picsum.photos/200/200?3" },
        ].map((store) => (
          <TouchableOpacity key={store.id} style={styles.storeCard}>
            <Image source={{ uri: store.img }} style={styles.storeImage} />
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.verMas}>Ver más</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  title: { fontSize: 28, fontWeight: "700", color: "#124E2C" },
  subtitle: { color: "#1BB273", fontWeight: "600" },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  searchInput: { flex: 1, marginLeft: 8, color: "#333" },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginTop: 24,
    marginBottom: 8,
  },
  featuredCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  featuredImage: { width: "100%", height: 180 },
  featuredInfo: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storeName: { fontWeight: "600", fontSize: 15 },
  rating: { color: "#666" },
  storesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storeCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  storeImage: { width: "100%", height: 100, borderRadius: 8 },
  verMas: { color: "#777", fontSize: 12, textAlign: "center", marginTop: 6 },
});

export default ExploreScreen;
