import React from 'react'
import { LessonFull } from '../interfaces/lessonInterface'
import { Instructor } from '../interfaces/instructorsInterface'
import { FlatList, Text, View } from 'react-native'
import { InstructorItem } from './InstructorItem'

interface Props {
    lessonFull: LessonFull,
    instructor: Instructor[]
}

export const LessonDetails = ({lessonFull, instructor}: Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20 }}>
            <View style={{flexDirection: 'row'}}>                     
                <Text style={{ marginLeft: 5, marginBottom: 5}}>{ lessonFull.skill.map( g => g ).join(', ')}</Text>
            </View>
           
            <Text style={{ fontSize: 16}}>
                {lessonFull.summary}
            </Text>
            
        </View>
        <View style={{ marginTop: 10, marginBottom: 100}}>
        
            <FlatList
                data ={ instructor }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <InstructorItem instructor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop: 10,      
                    height: 70              
                }}
            />

            
        </View>

    </>
    
  )
}
