import React from 'react'
import { useQuery } from 'react-query';
import { getAllBooks } from '../utils';
import { useParams } from 'react-router-dom';
import { Loader, Title } from '@mantine/core';

import { IconBook, IconX } from "@tabler/icons-react";
import { MyCard } from './MyCard';
export const Books = () => {
      const { data, isLoading, isError, error } = useQuery({
        queryKey: ["books"],
        queryFn: getAllBooks,
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
    <MyCard key={book.id} {...book} />
  ))}
</div>
</>
  )
}