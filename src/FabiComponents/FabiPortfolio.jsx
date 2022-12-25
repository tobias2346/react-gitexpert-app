import React, {useState} from 'react'
import { AddWorks } from './AddWorks'
import { Home } from './Home'

export const FabiPortfolio = () => {

    const [work, setWork] = useState([]);
    const [showForm, setShowForm] = useState(false);

    
    const Update_Works = (Update_Works) => {
        setWork([Update_Works, ...work]);
    };  
    
  return (
    <>
        
        <Home Update_Works={work}/> 

        <button onClick={() => setShowForm(!showForm)}>mostrar formulario</button>
        {showForm && <AddWorks Update_Works={Update_Works}/> }

    </>
  )
}
