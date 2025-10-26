import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  BlurView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

export default function HolaEduardoScreen() {
  const carouselItems = [
    { id: "1", title: "Consulta Virtual", image: "https://picsum.photos/400/200?1", href: "/lists/doctor" },
    { id: "2", title: "Salud Mental", image: "https://picsum.photos/400/200?2", href: "/lists/store" },
    { id: "3", title: "Ejercicio Diario", image: "https://picsum.photos/400/200?3", href: "/lists/asociation" },
    { id: "4", title: "Asesoría Legal", image: "https://picsum.photos/400/200?4", href: "/lists/lawyer" },
  ];

  const initialNews = [
    { id: "1", name: "María López", avatar: "https://i.pravatar.cc/100?img=5", description: "Se agregaron nuevas funciones a la app. ¡Descúbrelas ahora!" },
    { id: "2", name: "Carlos Pérez", avatar: "https://i.pravatar.cc/100?img=6", description: "Este fin de semana habrá un evento especial en la comunidad." },
    { id: "3", name: "Lucía García", avatar: "https://i.pravatar.cc/100?img=7", description: "Consejos para mejorar tu productividad en el trabajo." },
  ];

  const [news] = useState(initialNews);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeNewsId, setActiveNewsId] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [commentsMap, setCommentsMap] = useState({});

  const openComments = (id) => {
    setActiveNewsId(id);
    setModalVisible(true);
  };
  const closeComments = () => {
    setCommentText("");
    setActiveNewsId(null);
    setModalVisible(false);
  };
  const addComment = () => {
    if (!commentText.trim()) return;
    const newComment = { id: `${activeNewsId}-${Date.now()}`, text: commentText.trim(), date: new Date().toLocaleString() };
    setCommentsMap((prev) => ({ ...prev, [activeNewsId]: [newComment, ...(prev[activeNewsId] ?? [])] }));
    setCommentText("");
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentBubble}>
      <Text style={styles.commentText}>{item.text}</Text>
      <Text style={styles.commentDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.outerContainer}>
      {/* HEADER */}
      <LinearGradient colors={["#007AFF", "#00B2FF"]} start={[0, 0]} end={[1, 1]} style={styles.header}>
        <View>
          <Text style={styles.title}>Hola, Eduardo 👋</Text>
          <Text style={styles.subtitle}>Bienvenido de nuevo</Text>
        </View>
        <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.avatar} />
      </LinearGradient>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* CARRUSEL */}
        <Text style={styles.sectionTitle}>Recomendados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12 }}>
          {carouselItems.map((item) => (
            <Link key={item.id} href={item.href} asChild>
              <TouchableOpacity activeOpacity={0.85}>
                <View style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.cardImage} />
                  <LinearGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]} style={styles.overlay}>
                    <Text style={styles.overlayText}>{item.title}</Text>
                    <Ionicons name="arrow-forward-circle" size={22} color="#fff" />
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>

        {/* NOTICIAS */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Noticias</Text>
          <TouchableOpacity style={styles.verMasRow}>
            <Text style={styles.verMasText}>Ver más</Text>
            <Ionicons name="chevron-forward" size={18} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {news.map((item) => (
          <View key={item.id} style={styles.newsItem}>
            <View style={styles.newsHeader}>
              <Image source={{ uri: item.avatar }} style={styles.newsAvatar} />
              <Text style={styles.newsName}>{item.name}</Text>
            </View>
            <Text style={styles.newsDescription}>{item.description}</Text>

            <View style={styles.newsActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-social-outline" size={20} color="#007AFF" />
                <Text style={styles.actionText}>Compartir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => openComments(item.id)}>
                <Ionicons name="chatbubble-outline" size={20} color="#007AFF" />
                <Text style={styles.actionText}>Comentar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={20} color="#007AFF" />
                <Text style={styles.actionText}>Me gusta</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* MODAL */}
      <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={closeComments}>
        <View style={styles.modalBackdrop}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Comentarios</Text>
              <TouchableOpacity onPress={closeComments} style={styles.modalClose}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalContent}>
              {!commentsMap[activeNewsId]?.length ? (
                <View style={styles.noComments}>
                  <Text style={{ color: "#666" }}>Sé el primero en comentar</Text>
                </View>
              ) : (
                <FlatList data={commentsMap[activeNewsId]} keyExtractor={(c) => c.id} renderItem={renderComment} />
              )}
            </View>

            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Escribe un comentario..."
                value={commentText}
                onChangeText={setCommentText}
                multiline
              />
              <TouchableOpacity style={styles.sendButton} onPress={addComment}>
                <Ionicons name="send" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, backgroundColor: "#f8faff" },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: { color: "#fff", fontSize: 22, fontWeight: "700" },
  subtitle: { color: "#e6f7ff", fontSize: 14, marginTop: 2 },
  avatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: "#fff" },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16, alignItems: "center" },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#222", marginVertical: 10 },
  verMasRow: { flexDirection: "row", alignItems: "center" },
  verMasText: { fontSize: 14, fontWeight: "500", color: "#007AFF" },

  card: {
    width: width * 0.7,
    height: 190,
    borderRadius: 16,
    marginRight: 14,
    overflow: "hidden",
    elevation: 4,
    backgroundColor: "#fff",
  },
  cardImage: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  overlayText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  newsItem: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 14,
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  newsHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  newsAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  newsName: { fontSize: 15, fontWeight: "600", color: "#333" },
  newsDescription: { fontSize: 14, color: "#555", marginBottom: 10, lineHeight: 20 },
  newsActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
  },
  actionButton: { flexDirection: "row", alignItems: "center" },
  actionText: { marginLeft: 6, fontSize: 14, color: "#007AFF" },

  // MODAL
  modalBackdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end" },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  modalHeader: { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingBottom: 10 },
  modalTitle: { fontSize: 18, fontWeight: "700", color: "#333" },
  modalClose: { position: "absolute", right: 10 },
  modalContent: { maxHeight: 320, marginBottom: 10 },
  noComments: { alignItems: "center", paddingVertical: 20 },
  inputRow: { flexDirection: "row", alignItems: "flex-end" },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#f1f1f1",
    marginRight: 8,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  commentBubble: {
    backgroundColor: "#f1f5ff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  commentText: { fontSize: 14, color: "#222" },
  commentDate: { fontSize: 12, color: "#888", marginTop: 4, textAlign: "right" },
});
