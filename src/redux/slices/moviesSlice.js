import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionId: null,
  isLoggedIn: false,
  popularTVShows: null,
  popularTVShowsSeasons: null,
  favoriteTVShows: null,
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSessionId: (state, action) => {
      state.sessionId = action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    resetState: (state) => {
      state = initialState
    },
    setPopularTVShows: (state, action) => {
      state.popularTVShows = action.payload
    },
    setPopularTVShowsSeasons: (state, action) => {
      state.popularTVShowsSeasons = action.payload
    },
    setFavoriteTVShows: (state, action) => {
      state.favoriteTVShows = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  setSessionId, 
  setIsLoggedIn,
  resetState,
  setPopularTVShows,
  setFavoriteTVShows,
  setPopularTVShowsSeasons 
} = moviesSlice.actions

export default moviesSlice.reducer