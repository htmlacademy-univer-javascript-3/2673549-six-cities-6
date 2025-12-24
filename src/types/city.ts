import { Location } from './offer-types/location';
import { CityNames } from '@constants';

export type City = {
  location: Location;
  name: CityNames;
};
