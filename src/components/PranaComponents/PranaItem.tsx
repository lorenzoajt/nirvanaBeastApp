import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import { Prana } from '../../interfaces/pranaInterfaces';

interface Props {
  prana: Prana    
}

export const PranaItem = ({prana}: Props ) => {
  
  const [paused, setPaused] = useState(false)
  const onPlayPlayPausePress = () => {
    setPaused(!paused)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPlayPausePress}>
        <Video
          source={{ uri: prana.videoUri }}
          style={styles.video}
          resizeMode="cover"
          paused={paused}
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

