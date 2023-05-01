import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IProps {
  navigation: {navigate: (arg0: string) => void};
}

const WelcomeScreen = ({navigation}: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CardsScreen')}>
        <Text style={styles.text}>See Cards</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#019CFF',
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white'},
});
