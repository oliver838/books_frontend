import React from "react";
import { useQuery } from "react-query";
import { getCategories } from "../utils";
import { Box, Loader, Notification, Paper, Text } from "@mantine/core";

import '@mantine/core/styles.css';
export const Categories = () => {
  const { isLoading, status, data, error, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  data && console.log(data);
  isLoading && console.log(status);

  isError && console.log(error);

  return (
    <>
      {isLoading && <Loader color="blue" />}
      {isError && (
        <Notification icon={xIcon} color="red" title="Bummer!">
          {error.message}
        </Notification>
      )}
      {data && data.data.map(obj=>
        <Box key={obj.id} >
          <Paper shadow="lg" withBorder p="xl" radius="md" style={{width:"300px"}}>
            <Text style={{textAlign:"center"}}>{obj.name}</Text>
          </Paper>
        </Box>
      )}
    </>
  );
};
