import React,{Component} from 'react';
import ReactDOM from 'react-dom';


const element = <h1>Hello, world</h1>;
function RenderDemo(){
  var a = document.createElement('div');
  a.setAttribute('id','myroot');
  document.body.appendChild(a);
  ReactDOM.render(
    element,
    document.getElementById('myroot')
  );
}

export default RenderDemo;
