import Image from 'next/image'
import Carousel from '@/components/carousel'

const products = [ //Array of products
  { id: 1, name: 'Elden Ring', price: 80, image: '/product1.jpg' },
  { id: 2, name: 'Risk of Rain 2', price: 20, image: '/product2.jpg' },
  { id: 3, name: 'Destiny 2: Lightfall', price: 40, image: '/product3.jpg' },
  { id: 4, name: 'Dark Souls 3', price: 30, image: '/product4.jpg' },
  { id: 5, name: 'Valorant', price: 10, image: '/product5.jpg' },
  { id: 6, name: 'Overwatch 2', price: 15, image: '/product6.jpg' },
];
export default function Home() {
  return (

      <div>
        <Carousel title={"Our Games. Your Games."} subtitle={"CHEAPEST. GAMES. EVER"} products={products}/>
      </div>


  )
}
