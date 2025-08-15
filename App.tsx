import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>test</Text>
      <Text style={styles.text} >Open up App.tsx to start</Text>
      <Text style={styles.text1} >working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text1:{
    fontSize : 30,
    color : "green",
  },
  text:{
      fontSize : 30,
      color : "red"
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
