
export interface LoginData {    
    username_or_email:    string;
    password: string;
}

export interface RegisterData {    
    email:    string;
    password: string;
    name: string;
}

export interface LoginResponse {
    user: User;
    token:   string;
}


export interface User {
    id:       number;
    username: string;
    email:    string;
}
