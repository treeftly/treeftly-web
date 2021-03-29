import { Grid, Box } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'
import React from 'react'
import PropTypes from 'prop-types'
import IconButton from './IconButton'

const Footer = ({ onNewTransaction }) => {
  return (
    <Grid
      templateColumns='1fr 65px 1fr'
      gap={2}
      as='footer'
      borderTop='1px'
      borderColor='gray.200'
      h='65px'
      pos='relative'
      bg='white'
    >
      {/* Left part of the footer */}
      <Box />
      <Box>
        <IconButton
          ariaLabel='create new expense'
          label='Create new expense'
          icon={<MdAdd />}
          isRound
          size='2xl'
          pos='absolute'
          right='50%'
          h='65px'
          w='65px'
          transform='translate(50%, -15%)'
          onClick={onNewTransaction}
          colorScheme='primary'
        />
      </Box>
      {/* Right part of the footer */}
      <Box />
    </Grid>
  )
}

Footer.propTypes = {
  onNewTransaction: PropTypes.func,
}

export default Footer
