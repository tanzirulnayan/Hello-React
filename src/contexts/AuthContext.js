import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [username, setUsername] = useState({username: ''});
    const [password, setPassword] = useState({password: ''});
    const [isAuthenticated, setIsAuthenticated] = useState({isAuthenticated: false});
    const [token, setToken] = useState({token: ''});

    return(
        <AuthContext.Provider value={{username, password, isAuthenticated, token}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;