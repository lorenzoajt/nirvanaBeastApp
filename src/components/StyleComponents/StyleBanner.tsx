import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Style } from '../../interfaces/stylesInterfaces';

interface Props {
  style: Style;
  height?: number;
  width?: number;
  titleSize?: number
  subTitleSize?: number
}

export const StylerBanner = ({style, height = 420, width = 300, titleSize = 18, subTitleSize = 14}: Props) => {

    const uri = style.picture
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate('InstructorScreen', instructor)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={ styles.textContainer }>
        <Text numberOfLines={1} style={{...styles.title, fontSize: titleSize}}>{style.name}</Text>
        {/* <Text numberOfLines={1} style={{...styles.subTitle, fontSize: subTitleSize}}>{style.name}</Text> */}
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image: {
      flex: 1,
      borderRadius: 100,
    },
    imageContainer: {
      flex: 1,
      borderRadius: 18,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 10,
    },
    textContainer:{
        alignItems: 'center',
        marginTop: 10
    },
    title: {                
        fontWeight: 'bold',        
        
    },
    subTitle: {      
        opacity: 0.7
    }
  });
  