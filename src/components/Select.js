import theme from '@chakra-ui/theme'
import React from 'react'
import RSelect from 'react-select'

const controlStyle = (defaultStyle) => {
  return { ...defaultStyle, borderColor: theme.colors.gray['200'] }
}
const inputStyle = (defaultStyle) => {
  return { ...defaultStyle, padding: '6px 8px' }
}

const Select = React.forwardRef(({ ...rest }, ref) => {
  return <RSelect {...rest} styles={{ control: controlStyle, input: inputStyle }} ref={ref} />
})

export default Select
