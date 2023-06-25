import React from 'react'

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, image }) => { // Handles the product card
  return (
    <div className='rounded-lg p-1 h-full'>
      <div>
        <img src={image} alt={name} className='h-96 w-full object-cover'/>
      </div>
      <div>
        <h2 className='text-xl font-bold text-gray-500'>{name}</h2>
        <p className='text-gray-500'>${price}</p>
      </div>
    </div>
  )
}
export default Product