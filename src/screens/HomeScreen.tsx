import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useLessons } from '../hooks/useLessons';
import { LessonBanner } from '../components/LessonBanner';
import { InstructorSlider } from '../components/InstructorSlider';


const { width: windowWidth } =Dimensions.get('window')

export const HomeScreen = () => {
  const {isLoading, newLessons, instructors} = useLessons()
  const { top }= useSafeAreaInsets()

  if(isLoading){
    return(
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }
  
  return (

    <ScrollView>
      <View style={{ marginTop: top + 20 }}>             
          {/* carrusel principal */}
          <View
            style= {{height: 440}}
          >
            <Carousel
              data={ newLessons}
              renderItem={({ item }: any) => <LessonBanner lesson={item}/>}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={0.9}
            />
          </View>

          {/* Secciones */}
          <InstructorSlider instructors={instructors} title='Instructores'/>
          <HorizontalSlider lessons={newLessons} title='Estilo'/>
          <HorizontalSlider lessons={newLessons} title='Próximamente'/>
          
      </View>
    </ScrollView>
  )
}
