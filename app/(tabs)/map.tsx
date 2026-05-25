import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Pan-Atlantic University
        </Text>

        <Text style={styles.subtitle}>
          Lekki-Epe Expressway, Lagos
        </Text>
      </View>

      <MapView
  style={styles.map}
  initialRegion={{
    latitude: 6.433483171750335,
    longitude: 3.4702538550868143,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
>
  <Marker
    coordinate={{
      latitude: 6.483148272297676,
      longitude: 3.855072530203086,
    }}
    title="Pan-Atlantic University"
    description="Main Campus"
  />
</MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  map: {
    flex: 1,
  },
});