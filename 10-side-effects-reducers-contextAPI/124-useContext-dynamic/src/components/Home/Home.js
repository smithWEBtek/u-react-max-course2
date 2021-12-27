import React from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';

const Home = (props) => {

  return (
    <Card className={classes.home}>
      <h1>Welcome back my friend!</h1>
      <Button onClick={props.onLogout}>HomeLogout</Button>
    </Card>
  );
};

export default Home;
