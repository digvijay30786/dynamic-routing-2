import { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthNav } from '../components/context';
export default function Logout() {
    const { isAuth,changeAuth } = useContext(AuthNav);
    return isAuth?(<>
        <h1>We will back!!</h1>
        <button onClick={() => {
            changeAuth();
        }}>Logout</button>
    </>):<Redirect to='/login'/>;
}