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

/**
 * Hide/shows element based on passed props
 * above='{from breakpoints}' - Hides the component for breakpoint above the given breakpoint
 * <Hidden above='md' /> - Hides the component above md breakpoint - lg and up.
 * below='{from breakpoints}' - Hides the component for breakpoint below the given breakpoint
 * <Hidden below='lg' /> - Hides the component for breakpoint below lg - md and down
 */
const Hidden = ({ above, below, children }) => {
  console.log('above', above)
  const type = above || below
  const isHidden = useBreakpointValue(generateBreakpoint(type, !!above))
  console.log('isHidden', isHidden)

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
