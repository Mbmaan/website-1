import React from 'react'

const Watches = () => {

  const watchData =[
      {id: 1, name: 'Fossil', price: 12000, description: 'Luxury watch', image: '/w-9.jpg'},
      {id: 2, name: 'LIGK', price: 10000, description: 'Luxury watch', image: '/w-2.jpg'},
      {id: 3, name: 'Guess', price: 18000, description: 'Luxury watch', image: '/w-10.jpg'},
      {id: 4, name: 'Oley', price: 7000, description: 'Luxury watch', image: '/w3.jpg'},
      {id: 5, name: 'Quartz', price: 15000, description: 'Luxury watch', image: '/w-1.jpg'},
      {id: 6, name: 'King', price: 6000, description: 'Luxury watch', image: '/w-8.jpg'},

  ]
  return (
    <div>
      <div className="watches">
       {watchData.map((watch) => (
<div key={watch.id} className="watch-card">
  <img src={watch.image} alt={watch.name}/>
  <h3>{watch.name}</h3>
  <p>{watch.description}</p>
  <div className="price">${watch.price}</div>
  <button>Add to Cart</button>
</div>
       ))} 
      </div>
    </div>
  )
}

export default Watches
