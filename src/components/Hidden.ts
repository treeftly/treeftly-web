import { useBreakpointValue } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

const breakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];
const generateBreakpoint = (breakPoint: any, isAbove: any) => {
  const breakpointObj = {};
  const idx = breakpoints.indexOf(breakPoint);

  for (let i = 0; i < breakpoints.length; i += 1) {
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    breakpointObj[breakpoints[i]] = isAbove ? i > idx : i < idx;
  }

  return breakpointObj;
};

/**
 * Hide/shows element based on passed props
 * above='{from breakpoints}' - Hides the component for breakpoint above the given breakpoint
 * <Hidden above='md' /> - Hides the component above md breakpoint - lg and up.
 * below='{from breakpoints}' - Hides the component for breakpoint below the given breakpoint
 * <Hidden below='lg' /> - Hides the component for breakpoint below lg - md and down
 */
const Hidden = ({ above, below, children }: any) => {
  const type = above || below;
  const isHidden = useBreakpointValue(generateBreakpoint(type, !!above));

  if (isHidden) {
    return null;
  }

  return children;
};

Hidden.propTypes = {
  above: PropTypes.oneOf(breakpoints),
  below: PropTypes.oneOf(breakpoints),
};

export default Hidden;
