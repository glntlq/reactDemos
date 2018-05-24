import React from 'react'

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in Celsius</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}

export default TemperatureInput;
