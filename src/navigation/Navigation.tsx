import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Lesson } from '../interfaces/lessonInterface';
import { Instructor } from '../interfaces/instructorsInterface';
import { InstructorDetailScreen } from '../screens/InstructorDetailScreen';

export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Lesson
  InstructorScreen: Instructor
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: 'black'
        // }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />     
      <Stack.Screen name="InstructorScreen" component={InstructorDetailScreen} />      
    </Stack.Navigator>
  );
}