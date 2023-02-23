import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './state/index'
import { Provider, TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './state/api'

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefault => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
