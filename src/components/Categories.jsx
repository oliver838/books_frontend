import { useQuery } from "react-query";
import { getCategories } from "../utils";
import {
  Loader,
  Notification,
  Paper,
  Text,
  SimpleGrid,
  Group,
  Box,
  Title,
} from "@mantine/core";
import { IconBook, IconX } from "@tabler/icons-react";
import "./categories.css";
import { useNavigate } from "react-router-dom";
export const Categories = () => {
  
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const xIcon = <xIcon size={20}/>
  if (isLoading) return <Loader size="lg" />;
  if (isError)
    return (
      <Notification icon={<IconX />} color="red" title="Hiba">
        {error.message}
      </Notification>
    );

  return (
        <Paper className="main-card" radius="xl">
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={32}>
      {isLoading && <Loader color="blue"/>}
      {isError && <Notification icon={xIcon} color="red" title="Bummer"/>}
      {data.data.map((cat) => (
        <Paper key={cat.id} radius="xl" p="xl" onClick={()=>navigate("/books/categ/"+cat.id)} className="lux-glass-card">
          <Group align="flex-start" gap="md">
            <Box className="lux-glass-icon">
              <IconBook size={22} />
            </Box>

            <Box>
              <Text fz="lg" fw={600} >
                {cat.name}
              </Text>
              <Text fz="sm" c="dimmed" mt={4}>
                Böngészés kategóriában
              </Text>
            </Box>
          </Group>
            </Paper>
      ))}
    </SimpleGrid></Paper>
  );
};
