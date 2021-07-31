import { Switch, Route } from "react-router-dom";
import Home from './home';
import Setting from './setting';
import Dashboard from './dashboard';
import Login from './login';
import Logout from './logout'
import PrivateRouter from '../components/PrivateRouter';
export default function Rou()
{
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <PrivateRouter exact path="/dashboard">
                <Dashboard />
            </PrivateRouter>
            <PrivateRouter path="/dashboard/setting">
                <Setting />
            </PrivateRouter>
              <Route path="/login">
            <Login />
            </Route>
            <Route exact path="/logout">
                <Logout />
            </Route>
        </Switch>);
}