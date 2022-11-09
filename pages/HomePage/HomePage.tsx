import {Button, Image, ScrollView, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const HomePage = ({navigation}) => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <Text>Some more text</Text>

        <Image source={require('./img/man.png')} style={styles.img}></Image>
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />

      <Button
        title="Go to CreateWord"
        onPress={() => navigation.navigate('CreateWord')}
      />
    </ScrollView>
  );
};

export {HomePage};
