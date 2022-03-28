import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionId: null,
  isLoggedIn: false,
  popularTVShows: null,
  popularTVShowsToday: null,
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
    setPopularTVShowsToday: (state, action) => {
      state.popularTVShowsToday = action.payload
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
  setPopularTVShowsToday 
} = moviesSlice.actions

export default moviesSlice.reducer