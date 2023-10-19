import React from 'react'
import { LessonFull, Lesson } from '../../interfaces/lessonInterface';
import { Instructor } from '../../interfaces/instructorsInterface'
import { FlatList, Text, View } from 'react-native'
import { InstructorItem } from '../InstructorItem'
import { Serie } from '../../interfaces/serieInterface'
import { SerieLesson } from './SerieLesson';

interface Props {
    serieFull: Serie, 
    lessons: LessonFull[]
}

export const SerieDetails = ({serieFull, lessons}: Props) => {
  return (
    <>        
        {/* Detalles */}
        <View style={{ marginHorizontal: 20 }}>            
            <View style={{flexDirection: 'row'}}>                     
                <Text style={{ marginLeft: 5, marginBottom: 5}}>{ serieFull.skill.map( g => g ).join(', ')}</Text>
            </View>
           
            <Text style={{ fontSize: 16}}>
                {serieFull.summary}
            </Text>
            
        </View>
        <View style={{ marginTop: 10, marginBottom: 100}}>
        
            {lessons.map((lesson)=>{
                return (
                    <SerieLesson key={lesson.id} lesson={lesson}/>
                )
                
            })}

            
        </View>

    </>
    
  )
}
