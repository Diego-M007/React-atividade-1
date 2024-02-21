import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end', }}><Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30,padding: 5 }}>Diego Miranda de Oliveira</Text></View>
      <View style={{ alignItems: 'flex-start', }}><Text style={{ color: 'black', fontStyle: 'italic', fontSize: 25, borderWidth: 1,borderColor: 'red',borderStyle: 'solid',padding: 5, borderRadius:50,}}>Notebook 12</Text></View>
      <View style={{ alignItems: 'center', }}><Text style={{ color: 'black', fontSize: 20, backgroundColor: 'pink',padding: 5 }}>7</Text></View>
      <View style={{ alignItems: 'center', }}><Text style={{ color: 'white', fontSize: 15, backgroundColor: 'gray',borderWidth: 1,borderColor: 'black',borderStyle: 'solid', padding: 5,borderRadius:50 }}>Senai Nova Odessa</Text></View>
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
