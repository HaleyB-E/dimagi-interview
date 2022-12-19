import React, { Component } from 'react';

interface IFormState {
  email: string
  location: string
}

interface IFormProps {

}

class Form extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props)
    this.state={email: '', location: ''}
  }

  updateEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({email: ev.target.value})
  }

  updateLocation = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({location: ev.target.value})
  }

  onSubmit = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const currentTime = new Date();
    console.log('Sending value to dimagi: ')
    console.log(`[${this.state.email}, ${currentTime}, ${this.state.location}]`)
  }
  
  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor='email'>Email: </label>
            <input name='email' type='email' value={this.state.email} onChange={this.updateEmail}/>
          </div>
          <div>
            <label htmlFor='location'>Location: </label>
            <input name='location' type='text' value={this.state.location} onChange={this.updateLocation}/>
          </div>
          <button type='button' onClick={this.onSubmit}>Submit</button>
        </form>

        <br/>
        <a href='/'>Return home</a>
      </div>
    )
  }
}

export default Form;