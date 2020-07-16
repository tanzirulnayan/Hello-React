import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dataSource, setDataSource] = useState(null);
    const [loading, setLoading] = useState(false);

    const authCheck = (uname, pwd) => {
        setLoading(true);

        let details = {
            'username': uname,
            'password': pwd,
            'grant_type' : 'password'
        };
    
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('https://api.aiub.edu/ums-auth-api/Token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
        .then((response) => response.json()).then((json) => {
            console.log(json);
           // setDataSource(json.result)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, dataSource, authCheck}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;