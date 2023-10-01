import React from 'react'
import { View } from 'react-native'

export const Background = () => {
  return (
    <View
        style={{
            position: 'absolute',
            backgroundColor: '#000000',
            top: -250,
            width: 1000, 
            height: 1200,
            transform: [
              {
                rotate: '-70deg'
              }
            ]
        }}
    />

    
  )
}
