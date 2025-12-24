export const ApiRouteBuilder = {
  Offers: () => '/offers',
  Login: () => '/login',
  Logout: () => '/logout',
  Offer: (offerId: string) => `/offers/${offerId}`,
  OffersNearby: (offerId: string) => `/offers/${offerId}/nearby`,
  Reviews: (offerId: string) => `/comments/${offerId}`,
  SendReview: (offerId: string) => `/comments/${offerId}`,
  FavoriteOffers: () => '/favorite',
  ChangeFavoriteOfferStatus: (offerId: string, setIsFavorite: boolean) => `/favorite/${offerId}/${setIsFavorite ? 1 : 0}`,
};

export default ApiRouteBuilder;
