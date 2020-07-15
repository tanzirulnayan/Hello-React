import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dataSource, setDataSource] = useState(null);
    const [loading, setLoading] = useState(false);

    const authCheck = (uname, pwd) => {
        setLoading(true);
        
        console.warn('username: ' + uname);
        console.warn('pass: ' + pwd);

        fetch('https://api.aiub.edu/ums-auth-api/Token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                username: uname,
                password: pwd,
                grant_type : 'password',
            })
        })
        .then((response) => response.json())
        .then((json) => setDataSource(json.result))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

        console.log('Token: ' + dataSource);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, dataSource, authCheck}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;