export type RootObject = {
  docs: RootObjectDocs[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};
export type RootObjectDocs = {
  alternativeName: string;
  countries: string[];
  description: string;
  enName?: any;
  externalId: {imdb?: string; kpHD?: null; tmdb?: string};
  genres: string[];
  id: number;
  logo: {};
  movieLength: number;
  name: string;
  names: string[];
  poster: {previewUrl: string; url: string};
  rating: {
    await: number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
  };
  shortDescription?: any;
  type: string;
  votes: {};
  watchability: {};
  year: number;
};

export interface RootObjectRandom {
  ageRating?: any;
  alternativeName: string;
  backdrop: RootObjectBackdrop;
  budget: RootObjectBudget;
  countries: RootObjectCountries[];
  description: string;
  distributors: RootObjectDistributors;
  enName?: any;
  externalId: RootObjectExternalId;
  facts?: any;
  fees: RootObjectFees;
  genres: RootObjectGenres[];
  id: number;
  images: RootObjectImages;
  lists: any[];
  logo: RootObjectLogo;
  movieLength: number;
  name: string;
  names: RootObjectNames[];
  persons: RootObjectPersons[];
  poster: RootObjectPoster;
  premiere: RootObjectPremiere;
  productionCompanies: RootObjectProductionCompanies[];
  rating: RootObjectRating;
  ratingMpaa?: any;
  seasonsInfo: any[];
  sequelsAndPrequels: any[];
  shortDescription?: any;
  similarMovies: any[];
  slogan: string;
  spokenLanguages: RootObjectSpokenLanguages[];
  status?: any;
  technology: RootObjectTechnology;
  ticketsOnSale: boolean;
  top10?: any;
  top250?: any;
  type: string;
  typeNumber: number;
  updateDates: any[];
  updatedAt: string;
  videos: RootObjectVideos;
  votes: RootObjectVotes;
  watchability: RootObjectWatchability;
  year: number;
}
export interface RootObjectBackdrop {
  previewUrl?: any;
  url?: any;
}
export interface RootObjectBudget {}
export interface RootObjectCountries {
  name: string;
}
export interface RootObjectDistributors {
  distributor?: any;
  distributorRelease?: any;
}
export interface RootObjectExternalId {
  imdb: string;
  kpHD?: any;
  tmdb: number;
}
export interface RootObjectFeesUsa {
  currency: string;
  value: number;
}
export interface RootObjectFeesWorld {
  currency: string;
  value: number;
}
export interface RootObjectFees {
  usa: RootObjectFeesUsa;
  world: RootObjectFeesWorld;
}
export interface RootObjectGenres {
  name: string;
}
export interface RootObjectImages {
  framesCount: number;
}
export interface RootObjectLogo {
  url?: any;
}
export interface RootObjectNames {
  name: string;
}
export interface RootObjectPersons {
  enName: string;
  enProfession: string;
  id: number;
  name: string;
  photo: string;
  profession: string;
}
export interface RootObjectPoster {
  previewUrl: string;
  url: string;
}
export interface RootObjectPremiere {
  country: string;
  world: string;
}
export interface RootObjectProductionCompanies {
  name: string;
  previewUrl?: any;
  url?: any;
}
export interface RootObjectRating {
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}
export interface RootObjectSpokenLanguages {
  name: string;
  nameEn: string;
}
export interface RootObjectTechnology {
  has3D: boolean;
  hasImax: boolean;
}
export interface RootObjectVideos {
  teasers: any[];
  trailers: any[];
}
export interface RootObjectVotes {
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}
export interface RootObjectWatchability {
  items?: any;
}
