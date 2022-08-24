import { configureStore, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const reducer = createSlice({
  name: 'state',
  initialState: {
    token: undefined,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action?.payload
      Cookies.set('token', action?.payload)
    },
    logout: (state) => {
      state.token = undefined
      Cookies.remove('token')
    },
  },
})
export const store = configureStore({
  reducer: reducer.reducer,
})
export const { setToken, logout: logoutApp } = reducer.actions
export const updateToken = (token) => store.dispatch(setToken(token))
export const logout = () => store.dispatch(logoutApp())
