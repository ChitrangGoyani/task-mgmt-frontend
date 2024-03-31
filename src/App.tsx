import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login';
import { DashHome } from './pages/DashHome';
// import {Login} from "./pages/Login"

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false)
    // check if use is logged in, if yes set state to true else perform authentication
    // call the user info api
  return (
    <div className='App'>
      <BrowserRouter basename="/app">
        <Routes>
          <Route path='/' Component={() => <DashHome></DashHome>}/>
          {/* <Route path='/register' /> */}
          <Route path='/login' Component={() => <Login></Login>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
