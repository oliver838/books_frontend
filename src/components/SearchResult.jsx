import React from 'react'
import { useParams } from 'react-router-dom'
import { getBooksBySearch } from '../utils';
import { useQuery } from 'react-query';
import { Loader, Notification, Title } from '@mantine/core';
import { MyCard } from './MyCard';
import { IconX } from '@tabler/icons-react';
import { IconAlertTriangle } from '@tabler/icons-react';

export const SearchResult = () => {
    const {txt} = useParams()
          const { data, isLoading, isError, error } = useQuery({
            queryKey: ["booksbytitle",txt],
            queryFn: getBooksBySearch,
          });
          
      const xIcon = <xIcon size={20}/>
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
{data && !(data.data.length > 0) && (
    <div className="empty-panel">
      <div className="empty-icon">
        <IconAlertTriangle size={26} />
      </div>

      <div className="empty-text">
        <div className="empty-title">No results</div>
        <div className="empty-desc">
    Ezzel a címmel nincs egy könyv se. Próbálj más címet.
        </div>
    </div>
  </div>
)}

</div>
</>
  )
}