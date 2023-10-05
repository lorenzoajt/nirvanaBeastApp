import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, FlatList, Dimensions } from 'react-native';
import Video from 'react-native-video';
import pranas from '../../data/pranas';

export const PranaScreen = () => {

  const [paused, setPaused] = useState(false)
  const onPlayPlayPausePress = () => {
    setPaused(!paused)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPlayPausePress}>
        <Video
          source={{ uri: 'https://res.cloudinary.com/doiyktiuw/video/upload/v1696525925/Nirvana/f2igaepguucd152jdrlp.mp4' }}
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

