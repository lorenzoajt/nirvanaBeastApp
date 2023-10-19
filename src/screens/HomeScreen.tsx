import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useLessons } from '../hooks/useLessons';
import { LessonBanner } from '../components/LessonBanner';
import { InstructorSlider } from '../components/InstructorSlider';
import { SeriesSlider } from '../components/SeriesComponents/SeriesSlider';
import { StylesSlider } from '../components/StyleComponents/StylesSlider';


const { width: windowWidth } =Dimensions.get('window')

export const HomeScreen = () => {
  const {isLoading, newLessons, instructors, series, styles} = useLessons()    
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
          <StylesSlider styles={styles} title='Estilos'/>
          <HorizontalSlider lessons={newLessons} title='Nuevas Clases'/>
          {/* <HorizontalSlider lessons={newLessons} title='Estilos'/> */}      
          <SeriesSlider series={series} title='Series'/>
          
      </View>
    </ScrollView>
  )
}
