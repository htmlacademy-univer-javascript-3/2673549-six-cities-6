import { Location } from 'types/offer-types/location';
import { getRandomNumber } from 'lib/number-utils';
import { CityNames } from '@constants';

export function getRandomCityName(): CityNames {
  const cityValues = Object.values(CityNames) as CityNames[];
  const randomIndex = Math.floor(Math.random() * cityValues.length);
  return cityValues[randomIndex];
}

export function getRandomLocation(): Location {
  return {
    latitude: getRandomNumber(1, 100),
    longitude: getRandomNumber(1, 100),
    zoom: getRandomNumber(1, 100)
  };
}
