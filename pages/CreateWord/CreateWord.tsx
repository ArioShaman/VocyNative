import React from 'react';
import {Button, Text, View} from 'react-native';

const CreateWord = ({navigation}) => {
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

export {CreateWord};
