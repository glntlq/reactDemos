import React from 'react'
import BoilingVerdict from './boilingVerdict'
import TemperatureInput from './temperatureInput'
// import {toCelsius, toFahrenheit,tryConvert} from './tryConvert'


function toCelsius(fahrenheit){
  return fahrenheit ;
};

function toFahrenheit(celsius){
  return celsius * 9;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000);
  return rounded.toString();
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);

    this.state = {temperature: ''};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render(){
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;

    return(
      <div>
        <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
        />
         <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleCelsiusChange}
        />
        <BoilingVerdict  celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator;
