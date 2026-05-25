import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { User } from './type-def';

export default function DataListScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        'https://fake-json-api.mock.beeceptor.com/users'
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
  console.log(error);

  setUsers([]);
}  finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          API User Data
        </Text>

        <Text style={styles.headerSubtitle}>
          Total Users: {users.length}
        </Text>
      </View>

      {users.map((user, index) => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.index}>
            User #{index + 1}
          </Text>

          <Text style={styles.name}>
            {user.name}
          </Text>

          <Text style={styles.email}>
            {user.email}
          </Text>

          <Text style={styles.company}>
            {user.company?.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
    padding: 20,
  },
  index: {
    fontSize: 14,
    color: '#4A90E2',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },
  company: {
    fontSize: 15,
    color: '#777',
  },
});