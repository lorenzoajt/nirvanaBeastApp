import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Serie } from '../../interfaces/serieInterface'
import { useNavigation } from '@react-navigation/native'
import { Lesson, LessonFull } from '../../interfaces/lessonInterface'

interface Props {
    lesson: LessonFull
}

export const SerieLesson = ({ lesson }: Props) => {
    const uri = lesson.image_link
    const navigation = useNavigation()
  return (
    <TouchableOpacity
        // onPress={() => navigation.navigate('InstructorScreen', instructor)}
    >
        <View style={styles.container}>
            {
                lesson.image_link && (
                    <Image
                        source={{uri}}
                        style={{ width: 50, height: 50, borderRadius: 10}}
                    />
                )
            }
            
            <View style={styles.actorInfo}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}} numberOfLines={1}>{lesson.title}</Text>
                <Text style={{fontSize: 18, opacity: 0.7}}>{lesson.duration} min</Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50, 
        borderRadius: 10,         
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        elevation: 10,    
        marginLeft: 20,
        paddingRight: 15,        
        marginBottom: 20
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }

});