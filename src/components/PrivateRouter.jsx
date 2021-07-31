import { AuthNav } from '../components/context';
import {Route,Redirect } from "react-router-dom";
import { useContext } from 'react';
export default function PrivateRouter({path,children})
{
    const {isAuth} = useContext(AuthNav);
    if (!isAuth)
    {
       return <Redirect to='/login'/>
    }
    return <Route path={path}>{ children}</Route>
}