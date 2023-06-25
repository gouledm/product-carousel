"use client";
import Carousel from '@/components/carousel'


const products = [ //Array of products
  { id: 1, name: 'Elden Ring', price: 80, image: '/product1.jpg' },
  { id: 2, name: 'Risk of Rain 2', price: 20, image: '/product2.jpg' },
  { id: 3, name: 'Destiny 2: Lightfall', price: 40, image: '/product3.jpg' },
  { id: 4, name: 'Dark Souls III', price: 30, image: '/product4.jpg' },
  { id: 5, name: 'Deep Rock Galactic', price: 30, image: '/product5.jpg' },
  { id: 6, name: 'Stardew Valley', price: 17, image: '/product6.png' },
  { id: 7, name: 'Terraria', price: 11, image: '/product7.jpg' },
  { id: 8, name: 'Hollow Knight', price: 15, image: '/product8.png' },
];
export default function Home() {
  return (
      <div data-testid="page">
        <Carousel title={"Our Games. Your Games."} subtitle={"CHEAPEST. GAMES. EVER"} products={products}/>
      </div>
  )
}
