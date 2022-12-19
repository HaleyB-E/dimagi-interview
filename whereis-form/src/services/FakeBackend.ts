import { IGeonamesData, ILocationFormData, IUserLocationData } from '../entities';
import Axios from 'axios';

export const saveNewLocationForUser = async (formData: ILocationFormData): Promise<IUserLocationData> => {
  const location = await getBestGuessLocation(formData.location);
  const bestGuessLocation: IUserLocationData = {
    email: formData.email,
    submitDate: formData.submitDate,
    bestGuessLatitude: location.lat,
    bestGuessLongitude: location.lng
  }
  
  // TODO: this isn't SAVING, just returning - put in a backend here
  return bestGuessLocation;
}

const getBestGuessLocation = async(locationName: string): Promise<IGeonamesData> => {
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
}
