import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PranaScreen } from '../screens/TabScreens/PranaScreen';
import { MyPracticeScreen } from '../screens/TabScreens/MyPracticeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { InstructorDetailScreen } from '../screens/InstructorDetailScreen';
import { Lesson } from '../interfaces/lessonInterface';
import { Instructor } from '../interfaces/instructorsInterface';


export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Lesson
  InstructorScreen: Instructor
  TabNavigator: undefined
}

const HomeStack = createStackNavigator<RootStackParams>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
      <HomeStack.Screen name="InstructorScreen" component={InstructorDetailScreen} />      
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
      <Tab.Screen name="PranaScreen" component={PranaScreen} />
      <Tab.Screen name="MyPracticeScreen" component={MyPracticeScreen} />
    </Tab.Navigator>
  );
}