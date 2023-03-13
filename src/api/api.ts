import axios from 'axios';
import {RootObject} from '../types/Types';

export const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev',
  withCredentials: true,
  headers: {
    'X-API-KEY': 'TCX6MVG-W30MP6Q-J27YQNS-VDEG0EA',
  },
});

export const api = {
  getFilm(name: string) {
    return instance.get<RootObject>('/v1/movie', {
      params: {name},
    });
  },
};
