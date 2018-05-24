import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsxDemo from './components/jsxdemo';
// import RenderDemo from './components/renderDemo';
import Welcome from './components/demo1'
import Shuxing from './components/shuxing'
import Tick from './components/tick'
import StateDemo from './components/statedemo'
import ClickDemo from './components/clickDemo'
import ClickDemo2 from './components/clickDemo2'
import BindThisDemo from './components/bindThisDemo'
import Greeting from './components/ifElseDemo'
import LoginControl from './components/ifElseDemo2'
import LiList from './components/list'
import NameForm from './components/formDemo'
import MoreInput from './components/moreInput'
import Calculator from './components/threeComponents'
import WelcomeDialog from './components/propsDemo'
import CustomTextInput from './components/refs'
import FromDemo from './components/Form'
class App extends Component {
  componentDidMount() {
    this.lalla.eeee();
    console.log(11)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to china</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JsxDemo />
        <Welcome />
        <Shuxing name='Sara' />
        <Tick />
        <StateDemo />
        <ClickDemo />
        <ClickDemo2 />
        <BindThisDemo />
        <Greeting isLoggedIn = 'true' />
        <LoginControl />
        <LiList numbers ={[1,2,3,4]} />
        <NameForm />
        <MoreInput />
        <Calculator />
        <WelcomeDialog />
        <CustomTextInput
        ref={input => this.lalla = input}/>
        <FromDemo />
      </div>
    );
  }
}

export default App;
