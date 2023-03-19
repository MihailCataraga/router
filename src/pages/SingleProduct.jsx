import React from 'react'
import { useParams } from 'react-router-dom'
import cars from '../data/cars'

export default function SingleProduct() {
    const { productID } = useParams();
    const car = cars.find((car) => car.vin === productID)

  return (
    <div>
        <h1>Single Product</h1>
        <p>{productID}</p>
        <h2>{car.name}</h2>
        <div>
            {car.img.map((i) => (
                <img src={i} alt='car img' key={i} />
            ))}
        </div>
    </div>
  )
}
