import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Instructor } from '../interfaces/instructorsInterface';

interface Props {
    instructor: Instructor
}

export const InstructorItem = ({ instructor }: Props) => {
    const uri = instructor.picture
  return (
    <View style={styles.container}>
        {
            instructor.picture && (
                <Image
                    source={{uri}}
                    style={{ width: 50, height: 50, borderRadius: 10}}
                />
            )
        }
        
        <View style={styles.actorInfo}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{instructor.name}</Text>
            <Text style={{fontSize: 18, opacity: 0.7}}>{instructor.discipline}</Text>
        </View>

    </View>
    
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
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }

});