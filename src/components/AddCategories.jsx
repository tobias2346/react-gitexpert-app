import React, { useState } from 'react'

export const AddCategories = ({newCategorie}) => {

const [add, setAdd] = useState()

const onSubmit = (e) =>{
  e.preventDefault()
  if(add.length <= 1) return;

  newCategorie(add)
  
};

const onChange = ({target}) =>{
  setAdd(target.value)
};

return (
<>
  <form onSubmit={onSubmit} >

    <input type="text" 
      onChange={onChange}
      placeholder='busca tus fotos preferidas'
    />

  </form>

</>
)
}
