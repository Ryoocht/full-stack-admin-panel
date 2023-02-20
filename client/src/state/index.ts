import { PaletteMode } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'

type GlobalSliceType = {
  mode: PaletteMode
}

const initialState: GlobalSliceType = {
  mode: 'dark',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { setMode } = globalSlice.actions
export default globalSlice.reducer
