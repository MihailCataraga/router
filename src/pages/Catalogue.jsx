import React from 'react'
import { Link } from 'react-router-dom'
import cars from '../data/cars'

export default function Catalogue() {
  return (
    <div>
        <h1>Catalogue page</h1>
        {cars.map((car) => (
          <Link to={`/catalogue/${car.vin}`} key={car.vin}>
            <div>
              <img src={car.img[0]} alt='img' />
              <h2>{car.name}</h2>
              <p>{car.vin}</p>
            </div>
          </Link>
        ))}
        <Link to="/">Go to home</Link>
    </div>
  )
}
