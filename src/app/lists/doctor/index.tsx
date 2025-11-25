import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DoctoresScreen() {
  const router = useRouter();
  const [searchModal, setSearchModal] = useState(false);
  const [query, setQuery] = useState("");

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

  // 🔎 Filtrado del modal
  const filtrados = doctores.filter((d) =>
    d.nombre.toLowerCase().includes(query.toLowerCase()) ||
    d.especialidad.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* ========================== */}
      {/*   VISTA PRINCIPAL         */}
      {/* ========================== */}
      <ScrollView style={styles.container}>
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

        {/* Buscador que abre el modal */}
        <TouchableOpacity
          onPress={() => setSearchModal(true)}
          style={styles.searchContainer}
          activeOpacity={0.8}
        >
          <Ionicons name="search-outline" size={20} color="#999" />
          <Text style={{ color: "#999", marginLeft: 6 }}>
            Buscar Doctores...
          </Text>
        </TouchableOpacity>

        {/* Lista normal de doctores */}
        <Text style={styles.sectionTitle}>Doctores Populares</Text>

        {doctores.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => router.push(`/detail/doctor`)}
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

      {/* ========================== */}
      {/*   MODAL DE BÚSQUEDA       */}
      {/* ========================== */}
      <Modal visible={searchModal} animationType="slide">
        <View style={styles.modalContainer}>
          {/* Header Modal */}
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setSearchModal(false)}>
              <Ionicons name="arrow-back" size={26} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Buscar Doctor</Text>
          </View>

          {/* Input */}
          <View style={styles.modalSearchBox}>
            <Ionicons name="search-outline" size={20} color="#777" />
            <TextInput
              placeholder="Buscar por nombre o especialidad"
              value={query}
              onChangeText={setQuery}
              style={styles.modalInput}
            />
          </View>

          {/* Lista filtrada */}
          <ScrollView style={{ marginTop: 20 }}>
            {filtrados.map((d) => (
              <TouchableOpacity
                key={d.id}
                style={styles.resultCard}
                onPress={() => {
                  setSearchModal(false);
                  router.push(`/detail/doctor`);
                }}
              >
                <Image source={{ uri: d.foto }} style={styles.resultImage} />

                <View>
                  <Text style={styles.resultName}>{d.nombre}</Text>
                  <Text style={styles.resultSpec}>{d.especialidad}</Text>
                  <Text style={styles.resultCity}>{d.ciudad}</Text>
                </View>

                <View style={styles.resultRating}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text>{d.rating}</Text>
                </View>
              </TouchableOpacity>
            ))}

            {filtrados.length === 0 && (
              <Text style={styles.noResult}>No se encontraron resultados</Text>
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}



const styles = StyleSheet.create({
  // --- PRINCIPAL ---
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f8fdfb",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  hola: { color: "#00896f", fontSize: 18, fontWeight: "600" },
  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1a3d2f",
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
    padding: 12,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
    color: "#333",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    marginBottom: 14,
    borderColor: "#eaeaea",
    borderWidth: 1,
  },
  doctorImage: { width: 70, height: 70, borderRadius: 14, marginRight: 12 },
  cardInfo: { flex: 1 },
  doctorName: { fontSize: 16, fontWeight: "700" },
  doctorSpecialty: { color: "#555" },
  doctorCity: { color: "#777" },

  rating: { flexDirection: "row", alignItems: "center" },
  ratingText: { marginLeft: 4 },

  // --- MODAL ---
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  modalSearchBox: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  modalInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  resultCard: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 10,
  },
  resultName: { fontSize: 16, fontWeight: "700" },
  resultSpec: { color: "#555" },
  resultCity: { color: "#777" },
  resultRating: { marginLeft: "auto", flexDirection: "row", gap: 4 },

  noResult: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16,
    color: "#777",
  },
});
