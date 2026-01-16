import React from "react";
import { Loader, Title, Notification, Table, Button, Box, ScrollArea } from "@mantine/core";
import { IconX, IconEdit, IconTrash } from "@tabler/icons-react";
import { useQuery } from "react-query";
import { getAllBooks } from "../utils";
import "./Dashboard.css";
import { BookAddModal } from "./BookAddModal";
import { useState } from "react";

export const Dashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  const [modalOpened, setModalOpened] = useState(false);
  // Táblázat sorok
  const rows =
    data?.data?.map((book) => (
      <Table.Tr key={book.id}>
        <Table.Td>{book.title}</Table.Td>
        <Table.Td>{book.author}</Table.Td>
        <Table.Td>{book.description}</Table.Td>
        <Table.Td>
          <Box style={{ display: "flex", gap: "5px" }}>
            <Button size="xs" color="blue" variant="outline">
              <IconEdit />
            </Button>
            <Button size="xs" color="red" variant="outline">
              <IconTrash />
            </Button>
          </Box>
        </Table.Td>
      </Table.Tr>
    )) || [];

  return (
    <>
      <Title className="categ-title">Admin</Title>

      {isLoading && <Loader color="blue" />}
      {isError && (
        <Notification icon={<IconX size={20} />} color="red" title="Hiba">
          {error?.message || "Hiba történt az adatok betöltésekor"}
        </Notification>
      )}

      {/* ScrollArea a táblázatnak */}
      
      <ScrollArea style={{ height: 500 }} type="scroll">
        <Table
          highlightOnHover
          stickyHeader
          verticalSpacing="sm"
          className="mantine-Table-root"
        >
            
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Cím</Table.Th>
              <Table.Th>Szerző</Table.Th>
              <Table.Th>Leírás</Table.Th>
              <Table.Th>Akciók</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
          
        </Table>
        
      </ScrollArea>
      <Button onClick={() => setModalOpened(true)} mb="md">
  Új könyv hozzáadása
</Button>

   <BookAddModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        onAddBook={(newBook) => console.log("Új könyv:", newBook)}
      />
    </>
  );
};
