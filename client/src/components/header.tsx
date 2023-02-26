import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'

type HeaderProps = {
  title: string
  subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme()
  return (
    <Box>
      <Typography
        variant='h2'
        color={theme.palette.secondary.contrastText[100]}
        fontWeight='bold'
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color={theme.palette.secondary.contrastText[300]}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
