import React from 'react'
import RDatePicker from 'react-datepicker'
import { Box, chakra } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'

const SDatePicker = chakra(RDatePicker, {
  baseStyle: {
    width: '100%',
    border: '1px',
    borderColor: 'gray.200',
    fontSize: 'md',
    borderRadius: 'md',
    h: 10,
    px: 4,
  },
})

const DatePicker = React.forwardRef(({ ...rest }, ref) => {
  return (
    <Box
      sx={{
        '.react-datepicker-wrapper': {
          width: '100%',
        },
      }}
    >
      <SDatePicker todayButton='today' {...rest} ref={ref} />
    </Box>
  )
})

export default DatePicker
