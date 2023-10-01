import React from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const nirvanaBeastAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000',   
})

// add axios middleware to all requests
nirvanaBeastAPI.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token')
        if ( token ) {            
            config.headers.Authorization =  `token ${token}`;
        }
        return config
    }
)


export default nirvanaBeastAPI
