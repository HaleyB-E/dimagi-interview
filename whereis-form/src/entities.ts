export interface ILocationFormData {
  email: string;
  location: string;
  submitDate: Date;
}

export interface IGeonamesData {
  lat: string;
  lng: string;
  name: string;
}

export interface IUserLocationData {
  email: string;
  submitDate: Date;
  bestGuessLatitude: string;
  bestGuessLongitude: string;
}