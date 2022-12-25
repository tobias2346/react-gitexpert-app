import React from 'react'
import { PersonalInfo } from './PersonalInfo'
import { Works } from './Works'

export const Home = ({Update_Works}) => {

  return (
    <>
        <section className='First_Component'>
            <div className='Personal_Info'>
                <PersonalInfo/>
            </div>
             <div className='Works'>
                <Works Update_Works={Update_Works}/>
            </div> 
        </section>
    </>
  )
}
