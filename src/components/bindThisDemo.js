import React from 'react'

class BindThisDemo extends React.Component{
  constructor(props){
    super(props);
    this.bindClick = this.bindClick.bind(this);
  }
  bindClick(e){
    console.log((e.target).getAttribute('name'))
  }
  bindClick2(){
    alert('我是在绑定事件中绑定this')
  }
  bindClick3(){
    alert('我是在绑定事件中 用箭头函数的特性绑定this')
  }
  bindClick4 = () => {
    alert('我是利用属性初始化 来绑定this')
  }
  bindClick5(value1,value2){
    alert(value1+value2)
  }
  bindClick6(value){
    alert(value)
  }
  render(){
    return(
      <div>
        <button name = 'gln' onClick = {this.bindClick}>demo1</button>
        <button onClick = {this.bindClick2.bind(this)}>demo2</button>
        <button onClick = {() => this.bindClick3()}>demo3</button>
        <button onClick = {this.bindClick4}>demo4</button>
        {/* 给事件传递参数方法 */}
        <button onClick = {this.bindClick5.bind(this,'参数','来自bind')}>demo5</button>
        <button onClick = {() => this.bindClick6('参数来自箭头函数')}>demo6</button>

      </div>
    )
  }
}

export default BindThisDemo;
