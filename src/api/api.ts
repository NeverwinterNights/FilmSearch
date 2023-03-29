import axios from 'axios';
import {RootObject, RootObjectRandom} from '../types/Types';
import qs from 'query-string';

export const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev',
  withCredentials: true,
  headers: {
    'X-API-KEY': 'TCX6MVG-W30MP6Q-J27YQNS-VDEG0EA',
  },
  paramsSerializer: {
    serialize: (params: any) => {
      return qs.stringify(params);
    },
  },
});

export const api = {
  getFilm(name: string) {
    return instance.get<RootObject>('/v1/movie', {
      params: {name},
    });
  },
  getFilmFullAnswer(name: string) {
    console.log('name', name);
    return instance.get('/v1/movie', {
      params: {name, selectFields: ['id', 'name', 'videos']},
      // params: {name, selectFields: 'id name videos'},
    });
  },
  getRandomFilm() {
    return instance.get<RootObjectRandom>('/v1/movie/random');
  },
};
instance.interceptors.request.use(
  config => {
    console.log('URL: ', config.url); // вывод URL-запроса в консоль
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
// '/v1/movie?selectFields=id&selectFields=name&selectFields=videos&page=1&limit=10&name=Джентльмены',
