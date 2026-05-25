import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Welcome',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profiles',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="fetch-data"
        options={{
          title: 'Fetch API',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="cloud-download"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="data-list"
        options={{
          title: 'Data List',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="type-def"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}