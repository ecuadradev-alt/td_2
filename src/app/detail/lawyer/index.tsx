import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header con imagen */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/400/300' }}
          style={styles.profileImage}
        />
      </View>

      {/* Información principal */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Lic. Carlos Herrera</Text>
        <Text style={styles.specialty}>Abogado especializado en derecho cannábico</Text>
        <Text style={styles.subInfo}>C.A.L. 100470</Text>
        <Text style={styles.location}>Lima</Text>

        {/* Botones de sección */}
        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
            <Text style={styles.tabTextActive}>Sobre el Lic.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Feedbacks</Text>
          </TouchableOpacity>
        </View>

        {/* Rating y horario */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ 4.5</Text>
          <Text style={styles.schedule}>🕓 10:00 AM – 5:00 PM</Text>
        </View>

        {/* Experiencia */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia</Text>
          <Text style={styles.description}>
            Con más de 10 años de experiencia, he acompañado a pacientes, asociaciones y emprendedores del sector
            cannábico en todo tipo de procesos legales: desde la obtención de permisos y licencias, hasta la defensa en
            derechos relacionados con el uso medicinal y recreativo del cannabis.
          </Text>
        </View>

        {/* Servicios y productos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Servicios y productos</Text>
          <View style={styles.servicesRow}>
            <View style={styles.serviceCard}>
              <Image source={{ uri: 'https://picsum.photos/200/150?random=1' }} style={styles.serviceImage} />
              <Text style={styles.serviceText}>35% Descuento</Text>
            </View>
            <View style={styles.serviceCard}>
              <Image source={{ uri: 'https://picsum.photos/200/150?random=2' }} style={styles.serviceImage} />
              <Text style={styles.serviceText}>Asesoría legal</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1C1C1C',
  },
  specialty: {
    fontSize: 14,
    color: '#1C7C54',
    marginTop: 5,
    textAlign: 'center',
  },
  subInfo: {
    fontSize: 12,
    color: '#808080',
    marginTop: 3,
  },
  location: {
    fontSize: 13,
    color: '#808080',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#1C7C54',
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  tabButtonActive: {
    backgroundColor: '#1C7C54',
  },
  tabText: {
    color: '#1C7C54',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  rating: {
    color: '#FF9900',
    fontWeight: 'bold',
  },
  schedule: {
    color: '#808080',
  },
  section: {
    width: '100%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1C',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 18,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  serviceImage: {
    width: '100%',
    height: 100,
  },
  serviceText: {
    padding: 8,
    fontSize: 13,
    fontWeight: '500',
    color: '#1C1C1C',
  },
});
