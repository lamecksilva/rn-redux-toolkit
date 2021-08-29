import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import store from './src/state';

const App = () => {
  return (
    <Provider store={store}>
      <ExampleContent />
    </Provider>
  );
};

const ExampleContent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default App;
