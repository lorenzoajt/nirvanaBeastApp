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
import { Text } from 'react-native';


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

export const Tabs = () => {
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
            case 'HomeScreen':
              iconName = 'HS'
              break;
            case 'PranaScreen':
              iconName = 'PR'
              break;
            case 'MyPracticeScreen':
              iconName = 'MP'
              break;
                      
          }

          return <Text style={{color}}>{iconName}</Text>
        }

      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
      <Tab.Screen name="PranaScreen" component={PranaScreen} />
      <Tab.Screen name="MyPracticeScreen" component={MyPracticeScreen} />
    </Tab.Navigator>
  );
}