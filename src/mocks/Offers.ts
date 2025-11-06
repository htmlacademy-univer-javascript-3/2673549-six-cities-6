import { CityName } from '@constants';
import { Offer } from 'types/offer-types/offer';

export const offers: Offer[] = [
  {
    id: '0870c86b-6214-4ab7-b5e9-da1911ba6104',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 219,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavourite: false,
    isPremium: true,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    maxAdults: 2,
    goods: [
      'Washer',
      'Fridge',
      'Washing machine',
      'Cable TV',
      'Coffee machine',
      'Baby seat',
      'Breakfast',
      'Heating',
      'Laptop friendly workspace',
      'Air conditioning'
    ],
    host: {
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
      name: 'Sofia',
      isPro: false
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg'
    ],
  },
  {
    id: 'db7f71e3-c029-4321-a72b-bc4ba635e99e',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 334,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavourite: true,
    isPremium: true,
    rating: 4.5,
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    bedrooms: 3,
    maxAdults: 10,
    goods: [
      'Cable TV',
      'Breakfast',
      'Laptop friendly workspace',
      'Air conditioning',
      'Dishwasher',
      'Baby seat',
      'Washer',
      'Fridge',
      'Washing machine',
      'Kitchen',
      'Heating',
      'Towels',
      'Wi-Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg'
    ],
  },
  {
    id: '5a239777-8da2-4973-98ed-19cd88562b0a',
    title: 'Tile House',
    type: 'hotel',
    price: 163,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavourite: false,
    isPremium: false,
    rating: 2.9,
    description: '',
    bedrooms: 2,
    maxAdults: 8,
    goods: [
      'Towels',
      'Breakfast',
      'Laptop friendly workspace',
      'Coffee machine',
      'Fridge',
      'Cable TV',
      'Baby seat',
      'Kitchen',
      'Washer',
      'Dishwasher',
      'Washing machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg'
    ],
  },
  {
    id: '94dfd570-ece3-4d7d-a234-a813d5259281',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 645,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavourite: true,
    isPremium: false,
    rating: 1.1,
    bedrooms: 1,
    maxAdults: 2,
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    goods: [
      'Towels',
      'Air conditioning',
      'Heating',
      'Washing machine',
      'Dishwasher',
      'Baby seat',
      'Washer',
      'Coffee machine',
      'Cable TV',
      'Laptop friendly workspace',
      'Kitchen',
      'Wi-Fi',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
  },
  {
    id: '85cd3e7c-7c22-41fd-a0c7-431179026a41',
    title: 'House in countryside',
    type: 'house',
    price: 598,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    description: '',
    city: {
      name: CityName.Cologne,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavourite: true,
    isPremium: false,
    rating: 4.8,
    bedrooms: 5,
    maxAdults: 9,
    goods: [
      'Towels',
      'Breakfast',
      'Air conditioning',
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Kitchen'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg'
    ],
  }
];
