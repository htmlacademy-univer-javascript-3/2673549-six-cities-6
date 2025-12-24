import { NameSpace } from 'store/constants';
import { State } from 'types/state';
import { Offer, Offers } from 'types/offer-types/offer';

export const getFavouriteOffers = (state: State): Offers => state[NameSpace.FavoriteOffers].offers;

export const getFavouriteOffersByCity = (state: State): Record<string, Offers> => {
  const offers = state[NameSpace.FavoriteOffers].offers;
  return offers.reduce<Record<string, Offer[]>>((acc, offer) => {
    const cityName = offer.city.name;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);
    return acc;
  },
  {});
};

export const getFavouriteOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.FavoriteOffers].isOffersDataLoading;

export const getFavoriteOfferUpdatingStatus = (state: State): boolean => state[NameSpace.SelectedOffer].isReviewDataSending;
