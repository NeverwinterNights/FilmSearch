import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../api/api';
import {RootObject, RootObjectRandom} from '../types/Types';

export const getFilmsAC = createAction('films/getFilmsAC');

export const getFilmsTH = createAsyncThunk<RootObject | undefined, string>(
  'films/getFilmsTH',
  async (name: string) => {
    try {
      const res = await api.getFilm(name);
      console.log('valueqqqqqqqqqqqq', res.data);
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

export const getRandomFilmsTH = createAsyncThunk<RootObjectRandom | undefined>(
  'films/getRandomFilmsTH',
  async () => {
    try {
      const res = await api.getRandomFilm();
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

export const getFilmFullAnswerTH = createAsyncThunk(
  'films/getFilmFullAnswerTH',
  async (name: string) => {
    try {
      const res = await api.getFilmFullAnswer(name);
      console.log(
        'value11111111111111111111111111111',
        JSON.stringify(res.request, null, 2),
      );
    } catch (error) {
      console.log('error', error);
    }
  },
);

const initialState = {
  allFilms: {} as RootObject,
  randomFilms: {} as RootObjectRandom,
};

export const slice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFilmsTH.fulfilled, (state, action) => {
      state.allFilms = action.payload ? action.payload : ({} as RootObject);
    });
    builder.addCase(getRandomFilmsTH.fulfilled, (state, action) => {
      state.randomFilms = action.payload
        ? action.payload
        : ({} as RootObjectRandom);
    });
  },
});

export const reducer = slice.reducer;
