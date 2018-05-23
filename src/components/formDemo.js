import React from 'react'

class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'A'};

    this.handChange = this.handChange.bind(this);
    this.handSubmit = this.handSubmit.bind(this);
  }
  handChange(e){
    this.setState({value: e.target.value})
  }
  handSubmit(e){
    e.preventDefault();
    // alert(this.state.value)
    alert(this.fileInput.files[0].name)
  }
  render(){
    return(
      <form onSubmit={this.handSubmit}>
        <label>
          Name:
          {/* <input
            type="text"
            value={this.state.value}
            onChange = {this.handChange}
          /> */}

          {/* <textarea value={this.state.value} onChange={this.handChange} /> */}

          {/* <select value={this.state.value} onChange = {this.handChange}>
            <option value="grapefruit">grapefruit</option>
            <option value="lime">lime</option>
            <option value="mango">mango</option>
          </select> */}

           {/* <select multiple={true} value={['A','B']} onChange = {this.handChange}>
            <option value="A">a</option>
            <option value="B">b</option>
            <option value="C">c</option>
          </select> */}
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />

        </label>
        <input type="submit" value="submit"/>
      </form>
    )
  }

}

export default NameForm;
