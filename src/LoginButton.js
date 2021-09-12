import { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class LoginButton extends Component {

  handelLogin = () => {
    alert('got clicked')
  }

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */

    return (
      <>
        <Button onClick={this.handelLogin} size="lg">
          log in
        </Button>
      </>
    )
  }
}
