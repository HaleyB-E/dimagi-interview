import React, { Component } from 'react';
import { ILocationFormData } from '../entities';
import { saveNewLocationForUser } from '../services/FakeBackend.ts';

interface IFormState {
  email: string
  location: string
}

interface IFormProps {}

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
    // TODO: we won't have time today, but this should handle validation
    // at basic, make sure email is a real email and all fields are filled out
    // more advanced: check email is a real user
    const dataToSave: ILocationFormData = {
      ...this.state,
      submitDate: new Date()
    };
    console.log('Sending value to dimagi: ');
    console.log(dataToSave);
    saveNewLocationForUser(dataToSave);
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