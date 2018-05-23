import React from 'react'

class StateDemo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:1
    }
  }
  componentDidMount(){
    this.changeCount();
  }
  changeCount(){
    // this.setState(prevCount => ({
    //   count: this.state.count+1
    // }))
    this.setState(
      {
        count: this.state.count+1
      },function(){
        this.setState(
          {
            count: this.state.count+1
          },function(){
            this.setState({count: this.state.count+1});
          });
      }
    );

  }
  render(){
    return <div>Number is {this.state.count}</div>
  }
}

export default StateDemo;
