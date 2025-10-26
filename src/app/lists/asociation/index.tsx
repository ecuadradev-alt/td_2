import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ExploreScreen from "../../components/ExploreScreen";
import SearchResultsScreen from "../../components/SearchResultsScreen";

const App: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* 🔹 Sección de exploración */}
      <View style={styles.section}>
        <ExploreScreen />
      </View>

      {/* 🔹 Separador visual */}
      <View style={styles.divider} />

      {/* 🔹 Sección de resultados */}
      <View style={styles.section}>
        <SearchResultsScreen />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 10,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 10,
  },
});

export default App;
