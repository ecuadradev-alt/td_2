import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// Datos de ejemplo
const selectedProducts = [
  {
    id: '1',
    name: 'Producto 1',
    rating: 4.5,
    image: require('../../../../assets/home/asociation.png'), // o usa URL
  },
  {
    id: '2',
    name: 'Producto 2',
    rating: 4.8,
    image: require('../../../../assets/home/asociation.png'),
  },
  {
    id: '3',
    name: 'Producto 3',
    rating: 4.3,
    image: require('../../../../assets/home/asociation.png'),
  },
  {
    id: '4',
    name: 'Producto 4',
    rating: 4.9,
    image: require('../../../../assets/home/asociation.png'),
  },
];

const HomeScreen = () => {
  const renderProduct = ({ item }: { item: typeof selectedProducts[0] }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <View style={styles.productImagePlaceholder}>
          <Text style={styles.productImageText}>Imagen</Text>
        </View>
      </View>
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
      </Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={14} color="#f39c12" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#333" />
        </TouchableOpacity>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingTitle}>Explorar</Text>
          <Text style={styles.greetingSubtitle}>Hola Camilo</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarPlaceholder} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar asociaciones"
          style={styles.searchInput}
          placeholderTextColor="#bbb"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>

        {/* Asociaciones */}
        <Text style={styles.sectionTitle}>Asociaciones</Text>

        {/* Catálogo Card */}
        <View style={styles.catalogCard}>
          <View style={styles.catalogTextContainer}>
            <Text style={styles.catalogTitle}>Catálogo de Productos</Text>
            <Text style={styles.catalogYear}>2024</Text>
            <Text style={styles.associationName}>El Jardín de María José</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#f39c12" />
              <Text style={styles.catalogRating}>4.5</Text>
            </View>
          </View>
          <View style={styles.catalogImageContainer}>
            <View style={styles.logoPlaceholder} />
          </View>
        </View>

        {/* Productos seleccionados */}
        <Text style={styles.sectionTitle}>Productos seleccionados</Text>
        <FlatList
          data={selectedProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns= {2}
          columnWrapperStyle={styles.productRow}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Pantallas vacías
const PlaceholderScreen = () => (
  <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text style={{ color: '#666' }}>En desarrollo</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#aaa',
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={PlaceholderScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="search" size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={PlaceholderScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="heart" size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={PlaceholderScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="person" size={26} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 12,
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4CAF50',
  },
  greetingSubtitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  avatarPlaceholder: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 48,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  scrollContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  catalogCard: {
    backgroundColor: '#fffbe6',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  catalogTextContainer: {
    flex: 1,
  },
  catalogTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  catalogYear: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  associationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  catalogRating: {
    marginLeft: 6,
    fontSize: 15,
    color: '#f39c12',
    fontWeight: '600',
  },
  catalogImageContainer: {
    marginLeft: 16,
  },
  logoPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#ffeaa7',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  productRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    width: '48%',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  productImageContainer: {
    height: 90,
    marginBottom: 10,
  },
  productImagePlaceholder: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImageText: {
    color: '#bbb',
    fontSize: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: '#666',
  },
  seeMoreButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  tabBar: {
    height: 70,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});