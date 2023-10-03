import React, { createContext, useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginData, LoginResponse, RegisterData, User } from '../interfaces/accountsInterfaces'
import { AuthState, authreducer } from './authReducer'
import nirvanaBeastAPI from '../api/nirvanaBeastAPI'

type AuthContextProps = {
    errorMessage: string, 
    token: string | null
    user: User | null
    status: 'checking' | 'authenticated' | 'not-authenticated'
    signUp: ( registerData: RegisterData ) => void
    signIn: ( loginData: LoginData ) => void
    logOut: () => void
    removeError: () => void
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

    useEffect(() => {
      checkToken()
      // logOut()
    }, [])
  
    const checkToken = async () => {      
      const token = await AsyncStorage.getItem('token')
      
      // no token no authenticado
      if( !token ) return dispatch({ type: 'notAuthenticated'  })
  
      // hay token renovar o validar token
      try {
        const res = await nirvanaBeastAPI.get('/api/auth')
         // save new token
        await AsyncStorage.setItem('token', res.data.token)
        // let users in
        dispatch({
          type: 'signUp',
          payload: {
            token: res.data.token,
            user: res.data.usuario
          }
        })
      } catch (error: any) {       
        // remove token from async storage and return to login screen 
        logOut()
      }
      
      
      
     
        
    }
    
  
    const signUp = async ({username, email, password }: RegisterData) => {    
      console.log(username)    
      try {
        const res = await nirvanaBeastAPI.post<LoginResponse>('/api/auth/register', {
          username, 
          email, 
          password
        })
        
        dispatch({
          type: 'signUp',
          payload:{
            token: res.data.token,
            user: res.data.user,          
          }
        })
        await AsyncStorage.setItem('token', res.data.token)
      } catch (error: any) {
        dispatch({
          type: 'addError',
          payload: error.response.data.msg || "Revise la infromación"
        })
      }
    }
  
    const signIn = async ( { username_or_email, password } : LoginData) => {   
      try {
        const { data } = await nirvanaBeastAPI.post<LoginResponse>('api/auth/login', {
            username_or_email,
          password
        })
        dispatch({
          type: 'signUp',
          payload: {
            token: data.token,
            user: data.user
          }
        })
        // save token
        await AsyncStorage.setItem('token', data.token)
      } catch (error: any) {
        dispatch({
          type: 'addError',
          payload: error.response.data.msg || "Información incorrecta"
        })
      }
    }
    // clean async storage
    const logOut = async () => {
      await AsyncStorage.removeItem('token')
      dispatch({ type: 'logout' })    
  
    }
  
    const removeError = () => {
      dispatch({
        type: 'removeError'
      })
    }
  
    const [state, dispatch] = useReducer(authreducer, authInitialState)
    
    return (
      <AuthContext.Provider value={{
        ...state, 
        signIn,
        signUp, 
        logOut, 
        removeError
      }}>
        { children }
      </AuthContext.Provider>
    )
  }