import { useBreakpointValue } from '@chakra-ui/react';

const breakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];
const generateBreakpoint = (breakPoint: any, isAbove: any) => {
  const breakpointObj = {};
  const idx = breakpoints.indexOf(breakPoint);

  for (let i = 0; i < breakpoints.length; i += 1) {
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

export default Hidden;
