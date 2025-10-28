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
import { useRouter } from "expo-router";

export default function LawyerScreen() {
  const router = useRouter();

  const doctores = [
    {
      id: "1",
      nombre: "Jorge Casas",
      especialidad: "Medicina general",
      ciudad: "Lima",
      rating: 4.5,
      foto: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "2",
      nombre: "Miguel Miranda",
      especialidad: "Oncólogo",
      ciudad: "Arequipa",
      rating: 4.8,
      foto: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "3",
      nombre: "Diana Salas",
      especialidad: "Cardióloga",
      ciudad: "Lima",
      rating: 4.9,
      foto: "https://i.pravatar.cc/150?img=20",
    },
  ];

  const noticias = [
    {
      id: 1,
      titulo: "El uso del cannabis medicinal crece en hospitales peruanos",
      imagen: "https://cdn.pixabay.com/photo/2017/06/09/22/42/cbd-2389186_1280.jpg",
    },
    {
      id: 2,
      titulo: "Nuevas regulaciones impulsan la investigación médica en Perú",
      imagen: "https://cdn.pixabay.com/photo/2016/11/23/14/45/doctor-1850150_1280.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hola}>Hola Eduardo</Text>
          <Text style={styles.titulo}>Busquemos{"\n"}un Abogado</Text>
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

      {/* Lista de Doctores */}
      <Text style={styles.sectionTitle}>Abogados Populares</Text>

      {doctores.map((doctor) => (
        <TouchableOpacity
          key={doctor.id}
          style={styles.card}
          activeOpacity={0.9}
          // onPress={() => router.push(`/detail/doctor/${doctor.id}`)} // 👈 Navegación interna
          onPress={() => router.push(`/detail/lawyer`)} // 👈 Navegación interna
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

      {/* Noticias */}
      <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
        Noticias Médicas
      </Text>
      {noticias.map((noticia) => (
        <View key={noticia.id} style={styles.newsCard}>
          <Image source={{ uri: noticia.imagen }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>{noticia.titulo}</Text>
        </View>
      ))}

      {/* Módulo adicional */}
      <View style={styles.extraModule}>
        <Text style={styles.extraTitle}>Directorio Legal y Médico</Text>
        <Text style={styles.extraDesc}>
          Conecta con abogados, asociaciones y tiendas autorizadas. Construyamos
          juntos una red profesional segura para el uso medicinal del cannabis.
        </Text>
        <TouchableOpacity
          style={styles.extraButton}
          onPress={() => router.push("/directorio")}
        >
          <Ionicons name="leaf-outline" size={18} color="#fff" />
          <Text style={styles.extraButtonText}>Explorar Directorio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fdfb",
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
  searchIcon: { marginRight: 6 },
  searchInput: { flex: 1, fontSize: 15, color: "#333" },
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
  doctorImage: { width: 70, height: 70, borderRadius: 14, marginRight: 12 },
  cardInfo: { flex: 1 },
  doctorName: { fontSize: 16, fontWeight: "700", color: "#222" },
  doctorSpecialty: { fontSize: 14, color: "#555", marginTop: 2 },
  doctorCity: { fontSize: 13, color: "#777", marginTop: 4 },
  rating: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontSize: 13, color: "#444", marginLeft: 3 },
  newsCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  newsImage: { width: "100%", height: 130 },
  newsTitle: {
    padding: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#1a3d2f",
  },
  extraModule: {
    backgroundColor: "#e0f7ee",
    borderRadius: 16,
    padding: 18,
    marginTop: 30,
    marginBottom: 50,
  },
  extraTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#10694a",
    marginBottom: 8,
  },
  extraDesc: { fontSize: 14, color: "#333", marginBottom: 12 },
  extraButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00896f",
    borderRadius: 10,
    paddingVertical: 10,
  },
  extraButtonText: { color: "#fff", fontWeight: "600", marginLeft: 6 },
});
