import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from './pages/homepage.tsx';
import Form from './pages/form.tsx'
import List from './pages/list.tsx'
import { IUserLocationData, IUsersContextType } from './entities';
import { createContext } from 'react';

export const UsersContext = createContext<IUsersContextType | null>(null);

function App() {
  const [usersList, setUsersList] = useState<IUserLocationData[]>([]);

  const upsertUserLocation = (userLocationData: IUserLocationData) => {
    console.log('in the upsert!')
    // TODO: get context working so we can pass stuff around!
    
    // check if email has an entry in list already; if yes, replace lat/long and date with updated values
    //   (this is a little hacky, there's definitely some destructuring that could make this nicer but I don't remember the syntax)
    const existingValue = usersList.filter(userEntry => userEntry.email === userLocationData.email);
    if (existingValue.length > 0 ) {
      existingValue[0].bestGuessLatitude = userLocationData.bestGuessLatitude;
      existingValue[0].bestGuessLongitude = userLocationData.bestGuessLongitude;
      existingValue[0].submitDate = userLocationData.submitDate;
    }
    // if email is not already in list, add it
    else {
      setUsersList(
        [...usersList,
        userLocationData]
      )
    }
    console.log(usersList)
  }

  return (
    <div>
      <UsersContext.Provider value={{usersList, upsertUserLocation}}>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/list' element={<List/>}/>
          </Routes>
        </Router>
      </UsersContext.Provider>
    </div>
  );
}

export default App;