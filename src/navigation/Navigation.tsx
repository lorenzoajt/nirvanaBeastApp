import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Lesson } from '../interfaces/lessonInterface';
import { Instructor } from '../interfaces/instructorsInterface';
import { InstructorDetailScreen } from '../screens/InstructorDetailScreen';
import { LoginScreen } from '../screens/AccountsScreens/LoginScreen';
import { RegisterScreen } from '../screens/AccountsScreens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/AccountsScreens/LoadingScreen';
import { TabNavigator } from './TabNavigator';

export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Lesson
  InstructorScreen: Instructor
  TabNavigator: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const { status } = useContext(AuthContext)

  if ( status === 'checking' ) return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: 'black'
        // }
      }}
    >
      {
        (status !== 'authenticated')
        ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )
        : (
          <>    
            <Stack.Screen name="TabNavigator" component={TabNavigator} />            
          </>
        )
      }
    </Stack.Navigator>
  );
}