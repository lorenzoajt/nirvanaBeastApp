import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height
interface Props extends StackScreenProps<RootStackParams, 'InstructorScreen'> {}

export const InstructorDetailScreen = ( { route, navigation }: Props ) => {
  const instructor = route.params
  
  // const {instructors, isLoading, lessonFull} = useLessonDetails(instructor.id)
  
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image              
              style={styles.posterImage}              
              source={{uri: `${instructor?.picture}`}}
          />

        </View>

      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{instructor.name}</Text> 
        <Text style={styles.subtitle}>{instructor.discipline}</Text>
      </View>

      
      {/* <LessonDetails lessonFull={lessonFull!} instructor={instructors}/>           */}

      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >

          <Icon
            color="white"
            name="arrow-back-outline"
            size={60}          
          />
        </TouchableOpacity>
      </View>

      {/* Instructor Details */}
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>             
          <Text style={{ fontSize: 16}}>
              {instructor.bio}
          </Text>
          
      </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',    
    
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 10,    
  },
  imageBorder: {
    flex: 1, 
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25

  },
  posterImage: {
    flex: 1,            
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 30, 
    lect: 5
  }
  
});
