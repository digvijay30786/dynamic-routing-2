import './App.css';
import Rou from './pages/Routes';
import { Link } from "react-router-dom";
import { AuthNav } from './components/context';
import { useContext } from 'react';
function App() {
  const { isAuth } = useContext(AuthNav);
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        { isAuth? <Link to='/logout'>Logout</Link>: <Link to='/login'>Login</Link>}
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/setting'>Setting</Link>
        <hr/>
      </nav>
      <Rou/>
    </div>
  );
}

export default App;
