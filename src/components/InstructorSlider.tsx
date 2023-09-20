import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Instructor } from '../interfaces/instructorsInterface'
import { InstructorBanner } from './InstructorBanner'

interface Props {
    title?: string, 
    instructors: Instructor[]
}

export const InstructorSlider = ({title, instructors}: Props) => {
  
  return (
    <View style={{ height: (title)? 260 : 220 }}>
        {
            title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 15}}>{title}</Text>
        }
        
        <FlatList
            data={instructors}
            renderItem={({ item }: any) => <InstructorBanner instructor={item} height={200} width={140} titleSize={12} subTitleSize={10}/>}
            keyExtractor={ (item)=> item.id.toString()}            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
        />
    </View>
  )
}
