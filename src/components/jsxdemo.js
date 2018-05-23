import React, {Component} from 'react';
function formatName(user){
  return user.firstName + ' ' + user.lastName;
};
const user = {
  firstName: 'Harper',
  lastName: 'Perper'
};
function getGreeting(user){
  if(user){
    return <h1 myname = {user.firstName + user.lastName}>Hello,{formatName(user)}!</h1>
  }
  return <h1 myname = 'Stranger'>Hello,Stranger!</h1>
}
class JsxDemo extends Component{
  render(){
    return(
      // <h1>
      //   Hello,{formatName(user)}!
      // </h1>
      //可以作为一个表达式
      getGreeting(user)
    )
  }
}

export default JsxDemo
