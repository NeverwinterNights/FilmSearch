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
  votes: string[];
  watchability: string[];
  year: number;
};
