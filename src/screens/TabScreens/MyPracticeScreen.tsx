import React, { useContext } from 'react'
import { Button, Text, View, ScrollView } from 'react-native'
import { AuthContext } from '../../context/AuthContext'
import { HorizontalSlider } from '../../components/HorizontalSlider'
import { useLessons } from '../../hooks/useLessons'
import { Card } from '../../components/MyPracticeComponents/Card';

export const MyPracticeScreen = () => {
  const { logOut, user} = useContext(AuthContext)

  const {isLoading, newLessons} = useLessons()

  return (
    <ScrollView>
      <View style={{ margin: 20}}>
        <Button
            title='Logout'
            color="#5856D6"
            onPress={ logOut }
          />        
          <Text>{user?.username}</Text>        
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10

          }}>
            <Card title='Clases Completadas' amount='3' icon='checkmark-outline' iconColor='#6DBE45'/>
            <Card title='Tiempo' amount='7h 30min' icon='time-outline' iconColor='#6699CC'/>
          </View>       
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10

          }}>
            <Card title='Fitness' amount='3h 4min' icon='fitness-outline' iconColor='#FF6347'/>
            <Card title='Mindfulness' amount='4h 5min' icon='flame-outline' iconColor='#A49ACB'/>
          </View>          
          
                  

          <HorizontalSlider lessons={newLessons} title='Mi Lista'/>
          <HorizontalSlider lessons={newLessons} title='Completadas'/>
          
      </View>
    </ScrollView>
  )
}
