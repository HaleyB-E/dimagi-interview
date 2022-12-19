import { IGeonamesData, ILocationFormData, IUserLocationData } from '../entities';
import Axios from 'axios';

export const saveNewLocationForUser = async (formData: ILocationFormData): Promise<IUserLocationData | undefined> => {
  const location = await getBestGuessLocation(formData.location);
  if (!location) {
    // TODO: do better error handling
    return;
  }
  const bestGuessLocation: IUserLocationData = {
    email: formData.email,
    submitDate: formData.submitDate,
    bestGuessLatitude: location.lat,
    bestGuessLongitude: location.lng
  }

  const locationAsJson = JSON.stringify(bestGuessLocation);
  console.log('Data sent to Dimagi: ')
  console.log(locationAsJson)
  // TODO: for this app, we'll stop with outputting the JSON because I don't have enough experience
  //    setting up node.js backends to feel comfortable doing that on this timeframe. In that world,
  //    we'd have a database with:
  //      table Users (primary key identity column Id, required varchar column Email)
  //      table UsersCurrentLocations (required column UserId, required Datetime column SubmitDate, required varchar columns BestGuessLongitude and BestGuessLatitude)
  //    we'd upsert to UsersCurrentLocations where the submitted email matches the userid of the UCL row

  // THAT ALL BEING SAID, for the purpose of the current exercise, I'm returning the non-stringified version
  //    of the current best guess location and handling stuff in react state to provide an ok simulation
  //    of the app behavior for the purposes of this project
  return bestGuessLocation;
}

const getBestGuessLocation = async(locationName: string): Promise<IGeonamesData | undefined> => {
  //TODO: should do some kind of safe parsing on location name to avoid malicious injections
  return Axios.get(`http://api.geonames.org/searchJSON?q=${locationName}&maxRows=10&username=dimagi`)
    .then((response) => {
      // MVP of this product involves taking the first result from the geosearch
      //  I know that I don't have expertise here so next step would be talking
      //  to colleagues who have more experience about what the "right" way to guess would be
      if (response.data.geonames.length > 0) {
        return response.data.geonames[0];
      }
      // if we can't find them, something is wrong
      // TODO: better error handling 
      throw new Error('Could not guess current location')
    })
    .catch((error) => {
      console.error(error)
    })
}
