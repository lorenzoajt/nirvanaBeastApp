import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Lesson } from '../interfaces/lessonInterface';
import { Instructor } from '../interfaces/instructorsInterface';
import { InstructorDetailScreen } from '../screens/InstructorDetailScreen';
import { LoginScreen } from '../screens/AccountsScreens/LoginScreen';
import { RegisterScreen } from '../screens/AccountsScreens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/AccountsScreens/LoadingScreen';
import { Tabs } from './Tabs';
import { Serie } from '../interfaces/serieInterface';

export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Lesson
  InstructorScreen: Instructor
  Tabs: undefined
  SerieScreen: Serie
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
            <Stack.Screen name="Tabs" component={Tabs} />            
          </>
        )
      }
    </Stack.Navigator>
  );
}