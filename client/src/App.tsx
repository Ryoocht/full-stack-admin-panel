import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { useSelector } from 'react-redux'
import { RootState } from '.'
import { useMemo } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom'
import Layout from './scenes/layout/index'
import Dashboard from './scenes/dashboard/index'

const App = () => {
  const mode = useSelector((state: RootState) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App