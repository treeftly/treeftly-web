import React from 'react'
import { Grid } from '@chakra-ui/react'

const MainLayout = ({ children, ...rest }) => {
  return (
    <Grid templateColumns='1fr min(90ch, 100%) 1fr' minH='fullVH' {...rest}>
      {children}
    </Grid>
  )
}

export default MainLayout
