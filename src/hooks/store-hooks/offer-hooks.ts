import { useAppSelector } from 'hooks';

export function useCity() {
  return useAppSelector((state) => state.city);
}

export function useOffers() {
  const city = useCity();
  return useAppSelector((state) => state.offers.filter((offer) => offer.city.name === city.name));
}
