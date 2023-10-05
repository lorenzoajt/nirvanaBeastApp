import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


interface Props {
    title: string
    amount: string
    icon: string
    iconColor : string
}

export const Card = ({amount, icon, title, iconColor}:Props) => {
  return (
    <View style={styles.cardContainer}>        
        
        <View style={styles.firstLine}>
            <View style={{...styles.iconContainer, backgroundColor: `${iconColor}`,}}>
                <Icon
                    color="white"
                    name={icon}
                    size={20}          
                />
            </View>
            <Text style={ styles.title} numberOfLines={2}>{title}</Text>
            

        </View>
        <View style={styles.secondLine}>
            <Text style={ styles.subTitle} numberOfLines={1}>{amount}</Text>
        </View>
            
            
        
    </View>
  )
}

const styles = StyleSheet.create({
    
    cardContainer: {
        backgroundColor: '#F5F5F5', 
        display: 'flex',
        flexDirection: 'column',        
        height: 150,
        width:160,
        padding:15, 
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
    firstLine:{
        display: 'flex',
        flexDirection: 'row',                
        alignItems: 'center'
    },
    iconContainer:{        
        padding: 8,
        borderRadius: 8,        
    },
    secondLine: {        
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    title: {                              
        alignItems: 'center',
        opacity: 0.7,
        fontSize: 15,        
        color: '#333333',    
        marginLeft: 10                    
    },
    subTitle: {      
        fontWeight: 'bold', 
        fontSize: 35,
        color: '#333333',
        
        
    } 
});