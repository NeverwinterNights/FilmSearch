import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../api/api';
import {RootObject} from '../types/Types';

export const getFilmsAC = createAction('films/getFilmsAC');

export const getFilmsTH = createAsyncThunk<RootObject | undefined, string>(
  'films/getFilmsTH',
  async (name: string) => {
    try {
      const res = await api.getFilm(name);
      console.log('value', res.data);
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

const initialState = {
  allFilms: {} as RootObject,
};

export const slice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFilmsTH.fulfilled, (state, action) => {
      state.allFilms = action.payload ? action.payload : ({} as RootObject);
    });
  },
});

export const reducer = slice.reducer;
