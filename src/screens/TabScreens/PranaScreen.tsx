import { View, FlatList, Dimensions, Text } from 'react-native';
import { PranaItem } from '../../components/PranaComponents/PranaItem';

export const PranaScreen = () => {

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
      <PranaItem prana={breathePrana}/>    
    </View>
  )
}
