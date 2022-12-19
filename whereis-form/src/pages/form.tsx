import React, { useContext, useState } from 'react';
import { UsersContext } from '../App.tsx';
import { IUsersContextType } from '../entities';
import { ILocationFormData, IUserLocationData } from '../entities.ts';
import { saveNewLocationForUser } from '../services/FakeBackend.ts';

function Form() {
  const [email, setEmail] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [results, setResults] = useState<IUserLocationData | undefined>();
  const [hasLocationError, setHasLocationError] = useState<boolean>(false);
  const usersContext = useContext(UsersContext) as IUsersContextType;

  const onSubmit = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: we won't have time today, but this should handle validation
    // at basic, make sure email is a real email and all fields are filled out
    //    should also check location only has letters in it
    // more advanced: check email is a real user
    const dataToSave: ILocationFormData = {
      email,
      location,
      submitDate: new Date()
    };
    const locationDataWithLatLong = await saveNewLocationForUser(dataToSave);
    if (locationDataWithLatLong) {
      setResults(locationDataWithLatLong)
      setHasLocationError(false)
      usersContext.upsertUserLocation(locationDataWithLatLong)
    } else {
      setHasLocationError(true)
    }
  }

  return (
    <div className='app'>
      <form>
        <div>
          <label htmlFor='email'>Email: </label>
          <input name='email' type='email' value={email} onChange={(ev) => setEmail(ev.target.value)} disabled={!!results}/>
        </div>
        <div>
          <label htmlFor='location'>Location: </label>
          <input name='location' type='text' value={location} onChange={(ev) => setLocation(ev.target.value)} disabled={!!results}/>
        </div>
        {!results && 
          <button type='button' onClick={onSubmit}>Submit</button>
        }
      </form>
      {hasLocationError && <div className='error'>
        No location found with that name - please try again
      </div>}
      {results && <div className='success'>
        Thank you for submitting your location to Dimagi!
      </div>}
      <br/>
      <a href='/'>Return home</a>
    </div>
  )
}

export default Form;