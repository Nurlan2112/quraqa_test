import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import {useSelector} from 'react-redux';
import Main from './containers/Main/Main';
import AppNavBar from './components/UI/AppNavBar/AppNavBar';
import PostsContainer from './containers/Posts/PostsContainer';
import Login from './containers/Login/Login';
import ProfileContainer from './containers/Profile/ProfileContainer';

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?
      <Route {...props} /> :
      <Redirect to={redirectTo}/>
};


function App() {
  const isAuthorized = useSelector(state=>state.user.isAuthorized);
  return (
    <>
      <AppNavBar />
      <div className="App">
        <Switch>
          <Route path='/posts' exact component={PostsContainer} />
          <Route path='/login' exact component={Login} />
          <ProtectedRoute isAllowed={!!isAuthorized}
                          redirectTo='/login'
                          path='/profile'
                          exac
                          component={ProfileContainer} />
          <Route path='/' exact component={Main} />
        </Switch>
      </div>
    </>
  );
}

export default App;
