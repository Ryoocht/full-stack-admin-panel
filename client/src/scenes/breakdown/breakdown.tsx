import { Box } from '@mui/material'
import Header from '../../components/header'
import BreakdownChart from '../../components/break-down-chart'

const Breakdown = () => {
  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='BREAKDOWN' subtitle='Breakdown of Sales By Category' />
      <Box mt='40px' height='75vh'>
        <BreakdownChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Breakdown
