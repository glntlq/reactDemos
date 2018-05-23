import React from 'react'
import Greeting from './ifElseDemo'

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false});
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
    }else{
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        {isLoggedIn ?(
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    )
  }
}

export default LoginControl;
