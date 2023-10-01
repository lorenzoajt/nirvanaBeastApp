import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Lesson } from '../interfaces/lessonInterface';
import { Instructor } from '../interfaces/instructorsInterface';
import { InstructorDetailScreen } from '../screens/InstructorDetailScreen';
import { LoginScreen } from '../screens/AccountsScreens/LoginScreen';
import { RegisterScreen } from '../screens/AccountsScreens/RegisterScreen';

export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Lesson
  InstructorScreen: Instructor
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  // const { status } = useContext(AuthContext)
  const status = 'loading' // TODO: removbe this anf use the context

  // if ( status === 'checking' ) return <LoadingScreen />

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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />     
            <Stack.Screen name="InstructorScreen" component={InstructorDetailScreen} />      
          </>
        )
      }
    </Stack.Navigator>
  );
}