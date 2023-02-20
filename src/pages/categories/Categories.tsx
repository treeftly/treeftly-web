import {
  Box,
  Button,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useContext } from 'react';

// @ts-expect-error TS(6142): Module '../../components/layouts/PageLayout' was r... Remove this comment to see the full error message
import PageLayout from '../../components/layouts/PageLayout';
// @ts-expect-error TS(6142): Module '../../components/PageHeader' was resolved ... Remove this comment to see the full error message
import PageHeader from '../../components/PageHeader';
import { CategoriesContext } from '../../services/categories';
// @ts-expect-error TS(6142): Module './CategoryRow' was resolved to '/Users/mat... Remove this comment to see the full error message
import CategoryRow from './CategoryRow';
// @ts-expect-error TS(6142): Module './NewCategory' was resolved to '/Users/mat... Remove this comment to see the full error message
import NewCategory from './NewCategory';

const Categories = () => {
  const categories = useContext(CategoriesContext);
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PageHeader>Categories</PageHeader>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PageLayout>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Button colorScheme="primary" onClick={onOpen}>
          Create New Category
        </Button>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box mt={10}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Table>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Thead>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Tr>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Th w="20px">Label</Th>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Th>Name</Th>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Th w="20px" />
              </Tr>
            </Thead>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Tbody>
              {categories?.data.map((category: any) => (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CategoryRow data={category} key={category.id} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </PageLayout>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <NewCategory isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Categories;
