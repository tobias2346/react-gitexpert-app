import React, {useState} from 'react'

export const Works = ({Update_Works}) => {
  let arreglo = [...Update_Works]
  console.log(arreglo)
  
  
  const Click = (e) => {
    let ubicacion = Number(e.target.value)
    let index =  arreglo.indexOf(arreglo.find((a) => {
     return a.id === ubicacion
    }))
    console.log(arreglo)
    console.log(index)
   arreglo.splice(index, 1);
  };
  
  return (
    <>
        <div className='Header_Info'>
            <h4> Redactora SEO / Copywriter / Writer </h4>
            <p> Redacción SEO en español, optimización de contenidos, títulos y descripciones para mejorar el posicionamiento de tu blog o de tu e commerce.
            Te invito a leer mis redacciones publicadas en los siguientes enlaces: 
            </p>
        </div>
        <div> {   
         arreglo.map((e) => {  
           return <div key={e.title+e.description}>
            <h1 key={e.title}>{e.title}</h1>
            <img src={e.img} key={e.img} className='Work_img'/>
            <p key={e.description}>{e.description}</p>
            <button onClick={Click} value={e.id}>Eliminar trabajo</button>
           </div>
        })

}
        </div>


    </>
  )
}
