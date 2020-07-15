import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    const authCheck = (username, password) => {
        setUsername(username);
        setPassword(password);
        console.warn('username: ' + username);
        console.warn('password: ' + password);
    }

    return(
        <AuthContext.Provider value={{username, password, isAuthenticated, token, authCheck}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;