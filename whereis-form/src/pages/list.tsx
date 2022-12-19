import React from 'react';
import { IUserLocationData } from '../entities';

function List() {
  // TODO: this is using fake data because I couldn't get context to work properly
  //    ultimately, this should just display the UsersList values from the base app
  const fakeData: IUserLocationData[] = [
    {
      email:'nick@dimagi.com',
      submitDate: new Date('2011-05-19 14:05'),
      bestGuessLatitude: "9.74217",
      bestGuessLongitude:"45.57518"
    },
    {
      email: 'alex@dimagi.com',
      submitDate: new Date('2011-05-22 16:22'),
      bestGuessLatitude: '-15.40669',
      bestGuessLongitude: '28.28713'
    }
  ]

  return (
    <div className="app">
      <h2>Current Locations</h2>
      <table className='results-table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Submit Date/Time</th>
            <th>Best Guess Latitude</th>
            <th>Best Guess Longitude</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map(entry => {
            return <tr key={entry.email}>
              <td>{entry.email}</td>
              <td>{entry.submitDate.toDateString()}</td>
              <td>{entry.bestGuessLatitude}</td>
              <td>{entry.bestGuessLongitude}</td>
            </tr>
          })}
        </tbody>
      </table>

      <br/>
      <a href='/'>Return home</a>
    </div>
  )
}

export default List;