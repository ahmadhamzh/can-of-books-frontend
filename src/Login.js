import React from 'react';
import LoginButton from './LoginButton';
import Card from 'react-bootstrap/Card';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
          <LoginButton />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
