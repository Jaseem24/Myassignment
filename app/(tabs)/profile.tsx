import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Group Profiles</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/myprofile.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Oluwafolawemi Adeyemi</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211008</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/zara.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Zara Duru</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211022</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/mirabel.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Eboka Mirabel Uzoechi</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211023</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/muna.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Chas-Uwakwe Munachiso</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211017</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/muneer.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Muhammed Muneer Maccido Abdulkadir</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211065</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/emeka.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Chukwuemeka Linus Kpajie</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211037</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/kanyinsola.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Adefarati Oluwakanyinsolami</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211006</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/khemana.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ekohikhemana Elegbe</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>25100211057</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/kene.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Kenechukwu Omalu</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24120111086</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('@/assets/images/gerald.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>IBEZIM GERALD OBIOMACHUKWU</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Matric:</Text>
          <Text style={styles.value}>24100211034</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>ISM 210</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 25,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  label: {
    width: 80,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    flex: 1,
    color: '#333',
  },
});