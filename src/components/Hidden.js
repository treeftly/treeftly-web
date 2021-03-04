import { useBreakpointValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const breakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl']
const generateBreakpoint = (breakPoint, isAbove) => {
  const breakpointObj = {}
  const idx = breakpoints.indexOf(breakPoint)

  for (let i = 0; i < breakpoints.length; i += 1) {
    breakpointObj[breakpoints[i]] = isAbove ? i > idx : i < idx
  }

  return breakpointObj
}

const Hidden = ({ above, below, children }) => {
  const type = above || below
  const isHidden = useBreakpointValue(generateBreakpoint(type, !!above))

  if (isHidden) {
    return null
  }

  return children
}

Hidden.propTypes = {
  above: PropTypes.oneOf(breakpoints),
  below: PropTypes.oneOf(breakpoints),
}

export default Hidden
