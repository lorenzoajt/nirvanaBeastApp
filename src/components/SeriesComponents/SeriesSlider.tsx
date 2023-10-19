import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Serie } from '../../interfaces/serieInterface'
import { SerieBanner } from './SerieBanner'

interface Props {
    title?: string, 
    series: Serie[]
}

export const SeriesSlider = ({title, series}: Props) => {
  return (
    <View style={{ height: (title)? 260 : 220 }}>
        {
            title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 15}}>{title}</Text>
        }
        
        <FlatList
            data={series}
            renderItem={({ item }: any) => <SerieBanner serie={item} height={200} width={140} titleSize={12} subTitleSize={10}/>}
            keyExtractor={ (item)=> item.id.toString()}            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
        />
    </View>
  )
}
