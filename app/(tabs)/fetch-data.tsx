import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Button,
} from 'react-native';

import { User } from './type-def';

export default function FetchDataScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        'https://fake-json-api.mock.beeceptor.com/users'
      );

      const data = await response.json();

      setUsers(data);
   } catch (error) {
  console.log(error);

  setUsers([]);
}finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4A90E2" />

        <Text style={styles.loading}>
          Fetching API Data...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          API Fetch Successful
        </Text>

        <Text style={styles.headerSubtitle}>
          Total Users: {users.length}
        </Text>
      </View>

      {users.slice(0, 3).map((user) => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.name}>
            {user.name}
          </Text>

          <Text style={styles.info}>
            Email: {user.email}
          </Text>

          <Text style={styles.info}>
            Company: {user.company?.name}
          </Text>
        </View>
      ))}

      <Button
        title="Refresh API Data"
        onPress={fetchUsers}
        color="#4A90E2"
      />
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
  loading: {
    marginTop: 15,
    fontSize: 16,
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
    padding: 20,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },
});