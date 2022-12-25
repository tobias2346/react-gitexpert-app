import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([""]);

  const addCategorias = (newCategorie) => {

    if (categories.includes(newCategorie))return;
    
    setCategories([newCategorie, ...categories])

  };


return (
    <>
     <h1>Busca lo que quieras</h1>
      <AddCategories newCategorie={addCategorias} />
   
         {categories.map (category => <GifGrid key={category} category={category}/>)} 

    </>
  )
}
