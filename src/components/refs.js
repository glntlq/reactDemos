import React from 'react'

class CustomTextInput extends React.Component{
  constructor(props){
    super(props);
    this.eeee = this.eeee.bind(this);
  }

  eeee(){
    console.log(this.NumberInput)
    console.log(22)
    this.NumberInput.focus();
  }

  render(){
    return(
      <div>
         <input
          type="text"
          ref = {input => this.NumberInput = input}
        />
        <input
          type="text"
          ref={input => this.textInput = input}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.eeee}
        />
      </div>
    )
  }
}

export default  CustomTextInput
