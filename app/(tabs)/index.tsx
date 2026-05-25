import { StyleSheet, Image, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>ISM 210 Group Assignment</Text>

      <Image
        source={require('@/assets/images/myprofile.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Oluwafolawemi Adeyemi</Text>
      <Text style={styles.matric}>Matric: 24100211008</Text>

      <Image
        source={require('@/assets/images/zara.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Zara Duru</Text>
      <Text style={styles.matric}>Matric: 24100211022</Text>

      <Image
        source={require('@/assets/images/mirabel.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Eboka Mirabel Uzoechi</Text>
      <Text style={styles.matric}>Matric: 24100211023</Text>

      <Image
        source={require('@/assets/images/muna.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Chas-Uwakwe Munachiso</Text>
      <Text style={styles.matric}>Matric: 24100211017</Text>

      <Image
        source={require('@/assets/images/muneer.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>
        Muhammed Muneer Maccido Abdulkadir
      </Text>
      <Text style={styles.matric}>Matric: 24100211065</Text>

      <Image
        source={require('@/assets/images/emeka.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Chukwuemeka Linus Kpajie</Text>
      <Text style={styles.matric}>Matric: 24100211037</Text>

      <Image
        source={require('@/assets/images/kanyinsola.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>
        Adefarati Oluwakanyinsolami
      </Text>
      <Text style={styles.matric}>Matric: 24100211006</Text>

      <Image
        source={require('@/assets/images/khemana.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Ekohikhemana Elegbe</Text>
      <Text style={styles.matric}>Matric: 25100211057</Text>

      <Image
        source={require('@/assets/images/kene.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Kenechukwu Omalu</Text>
      <Text style={styles.matric}>Matric: 24120111086</Text>

      <Image
        source={require('@/assets/images/gerald.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>
        IBEZIM GERALD OBIOMACHUKWU
      </Text>
      <Text style={styles.matric}>Matric: 24100211034</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  backgroundColor: '#4A90E2',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 25,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  matric: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    marginBottom: 10,
  },
});