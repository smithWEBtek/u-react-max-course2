import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// created outside for the component function, because no data needed from component function
// all needed data will be passed in by React, thus it is outside the component
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  // return a new state
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: action.val, isValid: action.val && action.val.trim().length > 6 }
  }

  return { value: '', isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    // initial state
    value: '',
    isValid: null,
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    // initial state
    value: '',
    isValid: null,
  })

  useEffect(() => {
    // console.log('EFFECT RUNNING');

    return () => {
      // console.log('EFFECT CLEANUP');
    }
    // }) // runs on every key stroke
    // }, []) // runs once
  }, [passwordState.value]) // runs on password change (key stroke)

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState


  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking form validity')
      setFormIsValid(
        // enteredEmail.includes('@') && enteredPassword.trim().length > 6
        emailIsValid && passwordIsValid
      );
    }, 500) // debouncing the user input

    return () => {
      console.log('cleanup');
      clearTimeout(identifier)
    } // a clean up function, before useEffect executes again

    // }, [enteredEmail, enteredPassword, formIsValid])
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })

    // setFormIsValid(
    //   // event.target.value.includes('@') && enteredPassword.trim().length > 6
    //   // emailState.value.includes('@') && enteredPassword.trim().length > 6
    //   // emailState.isValid && enteredPassword.trim().length > 6
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })

    // setFormIsValid(
    //   // enteredEmail.includes('@') && event.target.value.trim().length > 6
    //   // emailState.value.includes('@') && event.target.value.trim().length > 6
    //   // emailState.isValid && passwordState.isValid
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    // setEmailIsValid(emailState.value.includes('@'));
    // setEmailIsValid(emailState.isValid)
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={enteredPassword}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
