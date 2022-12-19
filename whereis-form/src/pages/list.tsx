import React from 'react';
import { IUserLocationData } from '../entities';

function List() {
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
    <div className="App">
      <table>
        <tr>
          <th>Submit Date/Time</th>
          <th>Email</th>
          <th>Best Guess Latitude</th>
          <th>Best Guess Longitude</th>
        </tr>
        <tbody>
          {fakeData.map(entry => {
            return <tr>
              <td>{entry.submitDate.toDateString()}</td>
              <td>{entry.email}</td>
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