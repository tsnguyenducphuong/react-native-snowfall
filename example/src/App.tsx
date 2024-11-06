import { ImageBackground, StyleSheet, View } from 'react-native';
import { SnowFall } from 'react-native-snowfall';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <SnowFall />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
