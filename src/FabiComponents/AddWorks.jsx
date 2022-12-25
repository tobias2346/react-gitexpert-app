import React, {useState} from 'react'

export const AddWorks = ({Update_Works}) => {
  
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const Agregar_Trabajos = () => {

    let work = {
      img: img,
     title: title,
     description: description,
     id: Date.now()
    };

    Update_Works(work)
  };

   const onSubmit = (e) => {
     e.preventDefault()
   };

  const Seleccionar_Imagen = ({target}) =>{
    setImg(target.value)
  };

  const Seleccionar_Titulo = ({target}) =>{
    setTitle(target.value)
  };

  const Seleccionar_Descripcion = ({target}) =>{
  setDescription(target.value)
  };



  return (
    <>
        <form onSubmit={onSubmit}>

            <input type="text" 
              placeholder='Selecciona tu imagen'
              onChange={Seleccionar_Imagen}
             
            />

        </form>

         <form onSubmit={onSubmit}>

          <input type="text" 
            placeholder='Selecciona tu titulo'
            onChange={Seleccionar_Titulo}
          />

        </form>

        <form onSubmit={onSubmit} >

          <input type="text" 
            placeholder='Selecciona tu descripcion'
            onChange={Seleccionar_Descripcion}
          />
        </form>  
        <button onClick={Agregar_Trabajos}>Agregar</button>
    </>

  )
}
