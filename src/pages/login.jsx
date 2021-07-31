import { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthNav } from '../components/context';
export default function Login() {
    const { isAuth,handleAuth } = useContext(AuthNav);
    return !isAuth?(<>
        <h1>Welcome Login</h1>
        <button onClick={() => {
            handleAuth();
        }}>Login</button>
    </>):<Redirect to='/dashboard'/>;
}