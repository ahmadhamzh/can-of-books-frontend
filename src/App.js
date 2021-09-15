import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import Bestbooks from './components/BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import LoginButton from './LoginButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    const isAuth =this.props.auth0.isAuthenticated
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />

          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */ }

              {isAuth ? <Bestbooks /> : <Login />}
             
            </Route>
            <Route exact path="/profile">
              <Profile />
              
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
              
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
