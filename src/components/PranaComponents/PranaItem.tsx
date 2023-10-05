import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import { Prana } from '../../interfaces/pranaInterfaces';

interface Props {
  prana: Prana    
  isVideoPaused?: boolean
  setIsVideoPaused: React.Dispatch<React.SetStateAction<boolean>>
}

export const PranaItem = ({prana, isVideoPaused, setIsVideoPaused}: Props ) => {

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setIsVideoPaused(!isVideoPaused)}>
        <Video          
          source={{ uri: prana.videoUri }}
          style={styles.video}
          resizeMode="cover"
          paused={isVideoPaused}
          repeat        
          onError={(error)=> console.log(error)}
        />
        
      </TouchableWithoutFeedback>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});

