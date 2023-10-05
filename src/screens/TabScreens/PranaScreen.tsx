import { View } from 'react-native';
import { PranaItem } from '../../components/PranaComponents/PranaItem';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

interface Props {
  isVideoPaused: boolean
  setIsVideoPaused: React.Dispatch<React.SetStateAction<boolean>>
}

export const PranaScreen = ({ isVideoPaused, setIsVideoPaused }:Props) => {
  // Cuando la pantalla obtiene el enfoque
  useFocusEffect(
    useCallback(() => {    
      setIsVideoPaused(false)

      return () => setIsVideoPaused(true);
    }, [])
  );

  const breathePrana = {
    id: '1',
    videoUri: 'https://res.cloudinary.com/doiyktiuw/video/upload/v1696525925/Nirvana/f2igaepguucd152jdrlp.mp4'  
  }
  const naturePrana = {
    id: '1',
    videoUri: 'https://res.cloudinary.com/doiyktiuw/video/upload/v1696529243/Nirvana/fm5jtymanbr3wneogfln.mp4'  
  }

  return (
    <View style={{flex: 1}}>
        <PranaItem prana={breathePrana} isVideoPaused={isVideoPaused} setIsVideoPaused={setIsVideoPaused}/>    
    </View>
  )
}
