import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/appTheme'

export const PranaScreen = () => {
  return (
    <View>
        <Text>
          <Icon name='airplane-outline' size={80} color={colors.primary}/>
        </Text>
    </View>
  )
}
