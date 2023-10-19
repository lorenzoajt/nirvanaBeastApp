import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Style } from '../../interfaces/stylesInterfaces'
import { StylerBanner } from './StyleBanner'

interface Props {
    title?: string, 
    styles: Style[]
}

export const StylesSlider = ({title, styles}: Props) => {
  
  return (
    <View style={{ height: (title)? 260 : 220 }}>
        {
            title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 15}}>{title}</Text>
        }
        
        <FlatList
            data={styles}
            renderItem={({ item }: any) => <StylerBanner style={item} height={200} width={160} titleSize={12} subTitleSize={10}/>}
            keyExtractor={ (item)=> item.id.toString()}            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
        />
    </View>
  )
}
