import { User } from "../interfaces/accountsInterfaces"


export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated'
    token: string | null
    errorMessage: string
    user: User | null
}

type AuthAction = 
    | { type: 'signUp', payload: { token: string, user: User } }
    | { type: 'addError', payload: string }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }
    | { type: 'removeError' }

export const authreducer = ( state: AuthState, action: AuthAction ) : AuthState => {
    
    switch (action.type) {
        case "addError":
            return {
                ...state,
                user: null,
                status: "not-authenticated",
                token: null,
                errorMessage: action.payload
            }

        case "removeError":
            return {
                ...state,
                errorMessage: ''
            }
        
        case "signUp": 
            return {
                ...state, 
                errorMessage: '',
                status: "authenticated",
                token: action.payload.token,
                user: action.payload.user
            }
        case "notAuthenticated":
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null
            }
        case "logout":
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null
            }

        default:
            return state
            
    }
}