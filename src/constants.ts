export const MAX_RATING: number = 5;
export const MAX_COMMENT_SIZE: number = 2000;
export const MAX_REVIEWS_COUNT_PER_PAGE: number = 10;
export const MAX_NEAR_PLACE_COUNT: number = 3;

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PAGE_CONFIG = {
  BASE_TITLE: 'Шесть городов',
  DEFAULT_TITLE: 'Шесть городов' as string
} as const;

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum PlaceCardFeature {
  FavouritesCard = 'FavouritesCard'
}
