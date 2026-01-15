import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { IconBook, IconX } from "@tabler/icons-react";
import { Box, Group, Loader, Notification, Paper, Text, Title } from '@mantine/core';
import { MyCard } from './MyCard';
import { getBooksByCateg } from '../utils';
export const BooksByCateg = () => {
    const {categId} = useParams()
      const { data, isLoading, isError, error } = useQuery({
        queryKey: ["booksbycateg",categId],
        queryFn: getBooksByCateg,
      });
      const xIcon = <xIcon size={20}/>
  return (
<>
  {data &&
        <Title className='categ-title' order={3}>{data.data[1].name}</Title>

  }
<div className="books-grid">
  {isLoading && <Loader color="blue" />}
  {isError && <Notification icon={<IconX size={20}/>} color="red" title="Bummer"/>}

  {data && data.data.map((book) => (
    <MyCard nemkapcateg={true} key={book.id} {...book} />
  ))}
</div>
</>
  )
}
