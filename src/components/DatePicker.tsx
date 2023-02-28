import "react-datepicker/dist/react-datepicker.css";

import { Box, chakra } from "@chakra-ui/react";
import React from "react";
import RDatePicker from "react-datepicker";

const SDatePicker = chakra(RDatePicker, {
  baseStyle: {
    width: "100%",
    border: "1px",
    borderColor: "gray.200",
    fontSize: "md",
    borderRadius: "md",
    h: 10,
    px: 4,
  },
});

const DatePicker = React.forwardRef(({ ...rest }, ref: any) => {
  return (
    <Box
      sx={{
        ".react-datepicker-wrapper": {
          width: "100%",
        },
      }}
    >
      <SDatePicker todayButton="today" {...rest} ref={ref} />
    </Box>
  );
});

DatePicker.displayName = "DatePicker";

export default DatePicker;
