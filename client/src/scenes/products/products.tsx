import React, { useState } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useGetProductsQuery } from '../../state/api'
import Header from '../../components/header'
import { Product as ProductType, Stat } from '../../types'

type ProductProps = Omit<ProductType, 'createdAt' | 'updatedAt' | '__v'> & {
  stat: Pick<Stat, 'yearlyTotalSoldUnits' | 'yearlySalesTotal'>
}

const Product: React.FC<ProductProps> = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '0.55rem',
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary.contrastText[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
        <Typography
          sx={{ mb: '1.5rem' }}
          color={theme.palette.secondary.contrastText[400]}
        >
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant='body2'>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='text'
          size='small'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout='auto'
        unmountOnExit
        sx={{
          color: theme.palette.text.primary[300],
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const Products = () => {
  const { data, isLoading } = useGetProductsQuery()
  const isNonMobile = useMediaQuery('(min-width: 1000px)')

  if (!data) return null

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='PRODUCTS' subtitle='See your list of products.' />
      {data || !isLoading ? (
        <Box
          mt='20px'
          display='grid'
          gridTemplateColumns='repeat(4, minmax(0, 1fr))'
          justifyContent='space-between'
          rowGap='20px'
          columnGap='1.33%'
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          {data.map(({ _doc, stat }) => (
            <Product
              key={_doc._id}
              _id={_doc._id}
              name={_doc.name}
              description={_doc.description}
              price={_doc.price}
              rating={_doc.rating}
              category={_doc.category}
              supply={_doc.supply}
              stat={stat}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  )
}

export default Products
