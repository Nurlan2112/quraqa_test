import './App.css';
import { Route, Switch } from 'react-router';
import Main from './containers/Main/Main';
import AppNavBar from './components/UI/AppNavBar/AppNavBar';
import PostsContainer from './containers/Posts/PostsContainer';
import Login from './containers/Login/Login';
import ProfileContainer from './containers/Profile/ProfileContainer';

function App() {
  return (
    <>
      <AppNavBar />
      <div className="App">
        <Switch>
          <Route path='/posts' exact component={PostsContainer} />
          <Route path='/login' exact component={Login} />
          <Route path='/profile' exact component={ProfileContainer} />
          <Route path='/' exact component={Main} />
        </Switch>
      </div>
    </>
  );
}

export default App;
