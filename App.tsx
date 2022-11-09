import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomePage} from './pages/HomePage';
import {CreateWord} from './pages/CreateWord';

const Stack = createNativeStackNavigator();

const App = () => {
  // return <HomePage />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Vocabulary',
          }}
        />

        <Stack.Screen
          name="CreateWord"
          component={CreateWord}
          options={{
            title: 'Create word',
            headerBackTitle: 'Back',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
