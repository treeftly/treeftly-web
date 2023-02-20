import {
  Td,
  Text,
  Tr,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { format } from 'date-fns';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { MdClose } from 'react-icons/md';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory } from 'react-router-dom';

// @ts-expect-error TS(6142): Module '../../components/color-swatch/ColorIcon' w... Remove this comment to see the full error message
import ColorIcon from '../../components/color-swatch/ColorIcon';
// @ts-expect-error TS(6142): Module '../../components/IconButton' was resolved ... Remove this comment to see the full error message
import IconButton from '../../components/IconButton';
import { formatCurrency } from '../../utils/functions';
// @ts-expect-error TS(6142): Module './DeleteTransaction' was resolved to '/Use... Remove this comment to see the full error message
import DeleteTransaction from './DeleteTransaction';

const TransactionRow = ({ data }: any) => {
  const history = useHistory();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dateColumn = useBreakpointValue({
    base: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Td>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <ColorIcon
          color={data?.['category.label']}
          label={data?.['category.name']}
        />
        {format(new Date(data.date), 'LLL dd, yyyy')}
      </Td>
    ),
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    md: <Td>{format(new Date(data.date), 'LLL dd, yyyy')}</Td>,
  });
  const categoryColumn = useBreakpointValue({
    base: null,
    md: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Td>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <ColorIcon
          color={data?.['category.label']}
          label={data?.['category.name']}
        />
        {data?.['category.name']}
      </Td>
    ),
  });
  const descriptionColumn = useBreakpointValue({
    base: null,
    lg: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Td isTruncated maxW="350px">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Text isTruncated>{data.description}</Text>
      </Td>
    ),
  });

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tr
      pos="relative"
      cursor="pointer"
      onClick={() => history.push(`/transactions/${data.id}`)}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Td>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <IconButton
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<MdClose />}
          fontSize={{ base: '12px', lg: '14px' }}
          variant="ghost"
          ariaLabel="Delete transaction"
          label="Delete transaction"
          size={{ base: 'sm', lg: 'md' }}
          onClick={(evt: any) => {
            evt.stopPropagation();
            onOpen();
          }}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <DeleteTransaction data={data} isOpen={isOpen} onClose={onClose} />
      </Td>
      {dateColumn}
      {categoryColumn}
      {descriptionColumn}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Td isNumeric>{formatCurrency(data.amount)}</Td>
    </Tr>
  );
};

TransactionRow.propTypes = {
  data: PropTypes.object.isRequired,
};
export default TransactionRow;
