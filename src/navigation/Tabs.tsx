import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PranaScreen } from '../screens/TabScreens/PranaScreen';
import { MyPracticeScreen } from '../screens/TabScreens/MyPracticeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { InstructorDetailScreen } from '../screens/InstructorDetailScreen';
import { Lesson } from '../interfaces/lessonInterface';
import { Instructor } from '../interfaces/instructorsInterface';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';


export type RootStackParams = {
  HomeScreen: undefined
  DetailScreen: Lesson
  InstructorScreen: Instructor
  TabNavigator: undefined,
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

export const Tabs = () => {
  
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  
  return (
    <Tab.Navigator       
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}  
      screenOptions={ ({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,        
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0               
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ( { color, focused, size} ) => {
          let iconName: string = ''

          switch ( route.name ) {
            case 'HomeStackScreen':
              iconName = 'home-outline'
              break;
            case 'PranaScreen':
              iconName = 'ellipse-outline'
              break;
            case 'MyPracticeScreen':
              iconName = 'add-circle-outline'
              break;
                      
          }

          return <Icon name={iconName} size={20} color={color}/>
        }

      })}
    >
      <Tab.Screen name="HomeStackScreen" options={{title: 'Home'}} component={HomeStackScreen}  />
      <Tab.Screen name="PranaScreen" options={{title: 'Prana'}}>
        {() => <PranaScreen isVideoPaused={isVideoPaused} setIsVideoPaused={setIsVideoPaused} />}
      </Tab.Screen>      
      <Tab.Screen name="MyPracticeScreen" options={{title: 'My Practice'}} component={MyPracticeScreen}/>
    </Tab.Navigator>
  );
}