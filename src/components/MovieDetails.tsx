import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creaditsInterface'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyformatter from 'currency-formatter'
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}


export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20 }}>
            <View style={{flexDirection: 'row'}}>      
                <Icon
                    name="star-outline"
                    color= 'gray'
                    size={16}
                />
                <Text>{movieFull.vote_average}</Text>
                <Text style={{ marginLeft: 5}}>- { movieFull.genres.map( g => g.name ).join(', ')}</Text>
            </View>
            {/* Historia */}
            <Text style={{
                fontSize: 20, 
                marginTop: 10, 
                fontWeight: 'bold'
            }}>
                Historia
            </Text>
            <Text style={{ fontSize: 16}}>
                {movieFull.overview}
            </Text>
            {/* Budget */}
            <Text style={{
                fontSize: 20, 
                marginTop: 10, 
                fontWeight: 'bold'
            }}>
                Budget
            </Text>
            <Text style={{ fontSize: 18}}>
                { currencyformatter.format(movieFull.budget, {code: 'USD'})}
            </Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 100}}>
        <Text style={{
                fontSize: 20, 
                marginTop: 10, 
                fontWeight: 'bold',                
            }}>
                Actores
            </Text>
            <FlatList
                data ={ cast }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CastItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop: 10,      
                    height: 70              
                }}
            />

            
        </View>


    
    </>
  )
}
