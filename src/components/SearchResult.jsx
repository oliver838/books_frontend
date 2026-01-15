import React from 'react'
import { useParams } from 'react-router-dom'
import { getBooksBySearch } from '../utils';
import { useQuery } from 'react-query';
import { Loader, Title } from '@mantine/core';
import { MyCard } from './MyCard';

export const SearchResult = () => {
    const {txt} = useParams()
          const { data, isLoading, isError, error } = useQuery({
            queryKey: ["booksbytitle",txt],
            queryFn: getBooksBySearch,
          });
  return (

<>
  {data &&
        <Title className='categ-title' order={3}>Keresett cím: {txt}</Title>

  }
<div className="books-grid">
  {isLoading && <Loader color="blue" />}
  {isError && <Notification icon={<Iconx size={20}/>} color="red" title="Bummer"/>}

  {data && data.data.map((book) => (
    <MyCard key={book.id} {...book} />
  ))}
</div>
</>
  )
}