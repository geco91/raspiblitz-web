import { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import BottomNav from './components/Navigation/BottomNav/BottomNav';
import Header from './components/Navigation/Header/Header';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Apps from './pages/Apps/Apps';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import { AppContext } from './store/app-context';

const App = () => {
  const appCtx = useContext(AppContext);

  return (
    <div className='bg-gray-100 dark:bg-gray-700 transition-colors'>
      {!appCtx.isLoggedIn && (
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </BrowserRouter>
      )}

      {appCtx.isLoggedIn && (
        <BrowserRouter>
          <Header></Header>
          <div className='flex'>
            <SideDrawer></SideDrawer>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/home' />
              </Route>
              <Route path='/home' component={Home} />
              <Route path='/apps' component={Apps} />
              <Route path='/settings' component={Settings} />
              <Route>
                <Redirect to='/home' />
              </Route>
            </Switch>
          </div>
          <BottomNav></BottomNav>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
