import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end', }}><Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30 }}>Diego Miranda de Oliveira</Text></View>
      <View style={{ alignItems: 'flex-start', }}><Text style={{ color: 'black', fontWeight: 'italic', fontSize: 25, border: '1px solid red' }}>Notebook 12</Text></View>
      <View style={{ alignItems: 'center', }}><Text style={{ color: 'black', fontSize: 20, backgroundColor: 'pink' }}>7</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
