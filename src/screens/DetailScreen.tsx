import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Movie } from '../interfaces/movieInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { Navigation, RootStackParams } from '../navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ( { route, navigation }: Props ) => {
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const {cast, isLoading, movieFull} = useMovieDetails(movie.id)
  

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>

      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text> 
      </View>

      
      {
        isLoading 
          ? <ActivityIndicator size={ 30 } color='gray' style={{marginTop: 20}}/>  
          : <MovieDetails movieFull={movieFull!} cast={cast}/>          
      }
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >

          <Icon
            color="white"
            name="arrow-back-outline"
            size={60}          
          />
        </TouchableOpacity>
      </View>
      
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',    
    
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 10,    
  },
  imageBorder: {
    flex: 1, 
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25

  },
  posterImage: {
    flex: 1,            
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 30, 
    lect: 5
  }
  
});
