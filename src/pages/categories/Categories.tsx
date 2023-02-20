import {
  Box,
  Button,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";

import PageLayout from "../../components/layouts/PageLayout";
import PageHeader from "../../components/PageHeader";
import { CategoriesContext } from "../../services/categories";
import CategoryRow from "./CategoryRow";
import NewCategory from "./NewCategory";

const Categories = () => {
  const categories = useContext(CategoriesContext);
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <PageHeader>Categories</PageHeader>
      <PageLayout>
        <Button colorScheme="primary" onClick={onOpen}>
          Create New Category
        </Button>
        <Box mt={10}>
          <Table>
            <Thead>
              <Tr>
                <Th w="20px">Label</Th>
                <Th>Name</Th>
                <Th w="20px" />
              </Tr>
            </Thead>
            <Tbody>
              {categories?.data.map((category) => (
                <CategoryRow data={category} key={category.id} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </PageLayout>
      <NewCategory isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Categories;
