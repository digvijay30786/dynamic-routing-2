import React, { useState } from 'react';
import { Redirect } from 'react-router';
const AuthNav = React.createContext();
export default function AuthContext({children})
{
    const [isAuth, setAuth] = useState(false);

    const handleAuth = () =>
    {
        setAuth(true);
    }

    const changeAuth = () => {
        setAuth(false);
    }
    return (
        <AuthNav.Provider value={{ isAuth, handleAuth,changeAuth }  }>
            {children}
        </AuthNav.Provider>
    );
}

export { AuthNav };