import React from 'react'

class Tick extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: new Date()};
  }
  componentDidMount(){
    this.timeID = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timeID);
  }
  tick(){
    this.setState({
      data: new Date()
    });
  }
  render(){
    return (
      <div>Now is {this.state.data.toLocaleTimeString()}</div>
    )
  }
}

export default Tick;
