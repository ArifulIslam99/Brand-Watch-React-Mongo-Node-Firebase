import './App.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore';




function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/explore">
                <Explore></Explore>
              </Route>
              <Route exact path="/register">
                 <Registration></Registration>
              </Route>
            </Switch>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
