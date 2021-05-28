import React, {useState} from 'react';
import LoginForm from '../../components/UI/LoginForm/LoginForm';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginErrorReset, loginUser } from '../../store/actions/userActions';
import ErrorAlert from '../../components/UI/ErrorAlert/ErrorAlert';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state=>state.user.error);

  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const closeAlert = () => {
    dispatch(loginErrorReset());
  };

  const changeInputHandler = (e) => {
    const {name, value} = e.target;
    setLogin(prev => {
      return {...prev, [name]: value};
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(login));
  }

  return(
    <div className="Login">
      <LoginForm login={login}
                 changeInputHandler={changeInputHandler}
                 submitHandler={submitHandler} />
      {error ? <ErrorAlert closeAlert={closeAlert} errorMessage={error.message}/> : null}
    </div>
  );
};

export default Login;