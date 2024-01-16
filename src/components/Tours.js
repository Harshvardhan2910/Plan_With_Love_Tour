import React from 'react'
import Card from './Card'
import '../index.css'


export default function Tours({tours,removeTour}) {
  return (
    <div>
        <div className='container'>
        <h2 className='title'>Plan with Love</h2>
        </div>

        <div className='cards'> 
            {
            tours.map((tour) => {
                return <Card {...tour} removeTour={removeTour}></Card>

            })
        }
        </div>

    </div>
  )
}
