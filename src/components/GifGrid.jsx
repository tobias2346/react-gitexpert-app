import React, {useEffect, useState} from 'react'
import {getGifs} from'../helpers/getGifs'
import { GifItem } from '../helpers/GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs( category );



  return (
    <>
        <h3>{category}</h3>
        {
          isLoading 
          ? (<h2>Cargando...</h2>)
          : null
}

        <div className='card-grid'>
          {images.map ((img) => (
             <GifItem key={img.id}
             title={img.title}
             url={img.url}
             id={img.id}
             img={img}
             />
           
          ))
          }
        </div>
    </>
  )
}
