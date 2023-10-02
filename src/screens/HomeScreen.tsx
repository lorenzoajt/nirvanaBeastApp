import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useLessons } from '../hooks/useLessons';
import { LessonBanner } from '../components/LessonBanner';
import { InstructorSlider } from '../components/InstructorSlider';
import { AuthContext } from '../context/AuthContext';


const { width: windowWidth } =Dimensions.get('window')

export const HomeScreen = () => {
  const {isLoading, newLessons, instructors} = useLessons()
  const { top }= useSafeAreaInsets()
  const { logOut} = useContext(AuthContext)

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
      <Button
          title='Logout'
          color="#5856D6"
          onPress={ logOut }
        />
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
          <HorizontalSlider lessons={newLessons} title='Para ti'/>
          <HorizontalSlider lessons={newLessons} title='Próximamente'/>
          
      </View>
    </ScrollView>
  )
}
