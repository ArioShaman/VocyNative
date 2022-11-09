import {Button, Text, View} from 'react-native';
import React from 'react';

const AboutPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <Text>Hello cock</Text>

      <Button
        title="Go to Main"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export {AboutPage};
