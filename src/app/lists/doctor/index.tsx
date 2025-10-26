import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DoctoresScreen() {
  const doctores = [
    {
      id: 1,
      nombre: "Jorge Casas",
      especialidad: "Medicina general",
      ciudad: "Lima",
      rating: 4.5,
      foto: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      nombre: "Miguel Miranda",
      especialidad: "Oncólogo",
      ciudad: "Arequipa",
      rating: 4.5,
      foto: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 3,
      nombre: "Diana Salas",
      especialidad: "Cardióloga",
      ciudad: "Lima",
      rating: 4.5,
      foto: "https://i.pravatar.cc/150?img=20",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hola}>Hola Camilo</Text>
          <Text style={styles.titulo}>Busquemos{"\n"}un Doctor</Text>
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=68" }}
          style={styles.avatar}
        />
      </View>

      {/* Buscador */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Doctores"
          placeholderTextColor="#999"
        />
      </View>

      {/* Título sección */}
      <Text style={styles.sectionTitle}>Doctores populares</Text>

      {/* Lista de doctores */}
      {doctores.map((doctor) => (
        <TouchableOpacity
          key={doctor.id}
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => console.log("Ver perfil de", doctor.nombre)}
        >
          <Image source={{ uri: doctor.foto }} style={styles.doctorImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.doctorName}>{doctor.nombre}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.especialidad}</Text>
            <Text style={styles.doctorCity}>{doctor.ciudad}</Text>
          </View>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{doctor.rating}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  hola: {
    color: "#00896f",
    fontSize: 18,
    fontWeight: "600",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a3d2f",
    marginTop: 4,
    lineHeight: 34,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 14,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 14,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  doctorCity: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 13,
    color: "#444",
    marginLeft: 3,
  },
});
