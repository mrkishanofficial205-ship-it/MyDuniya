import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Duniya 🔥</Text>
      <Text style={styles.subtitle}>जिगरी का अपना ऐप</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00ff00',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
});
