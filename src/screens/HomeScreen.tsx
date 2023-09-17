import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import movieDB from '../api/movieDB'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } =Dimensions.get('window')

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()  
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
              data={ nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item}/>}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={0.9}
            />
          </View>

          {/* Paliculas populares */}
          <HorizontalSlider movies={popular} title='Popular'/>
          <HorizontalSlider movies={topRated} title='Top Rated'/>
          <HorizontalSlider movies={upcoming} title='Upcoming'/>
          
      </View>
    </ScrollView>
  )
}
