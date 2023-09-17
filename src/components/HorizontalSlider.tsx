import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'
import { Lesson } from '../interfaces/lessonInterface'
import { LessonBanner } from './LessonBanner'

interface Props {
    title?: string, 
    lessons: Lesson[]
}

export const HorizontalSlider = ({title, lessons}: Props) => {
  return (
    <View style={{ height: (title)? 260 : 220 }}>
        {
            title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>{title}</Text>
        }
        
        <FlatList
            data={lessons}
            renderItem={({ item }: any) => <LessonBanner lesson={item} height={200} width={140} titleSize={12} subTitleSize={10}/>}
            keyExtractor={ (item)=> item.id.toString()}            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
        />
    </View>
  )
}
