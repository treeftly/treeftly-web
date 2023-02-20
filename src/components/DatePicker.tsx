import 'react-datepicker/dist/react-datepicker.css';

import { Box, chakra } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import RDatePicker from 'react-datepicker';

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
});

const DatePicker = React.forwardRef(({ ...rest }, ref: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      sx={{
        '.react-datepicker-wrapper': {
          width: '100%',
        },
      }}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <SDatePicker todayButton="today" {...rest} ref={ref} />
    </Box>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
