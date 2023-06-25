import React, { useState, useEffect } from 'react'
import Product  from './product';
import { Data } from '../common/data';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';

interface CarouselProps{
  products: Data[];
  title: string;
  subtitle: string;
}

export default function Carousel(props: CarouselProps) {
  
    const sliderContainer = React.useRef<HTMLDivElement>(null);
    const slider = React.useRef<HTMLUListElement>(null);
    const [cardWidth, setCardWidth] = useState(475);
    const [selectedProduct, setselectedProduct] = useState(4); // Handles the number of products to show in the carousel 
  
    let lastWidth = 0; //Keeps track of the last width so that the page doesn't reload when the screen width doesn't change
    let cards = slider.current?.getElementsByTagName('li') as HTMLCollectionOf<HTMLLIElement>;

    if (null !== cards && cards != undefined) { 
        if ((null !== slider.current) && (null !== cards)) {
            //console.log("margin translate")
            slider.current.style.width = cards.length * cardWidth + "px";
            slider.current.style.transition = 'margin';
            slider.current.style.transitionDuration = '1s';
        }

        for (let index = 0; index < cards.length; index++) { // Handles the width of the cards
            const element = cards[index];
            element.style.width = cardWidth + 'px'
            //console.log(element.style.width)
        }
    }

    function next() { // Handles the previous button
        if (null != slider.current && (cards != undefined)) {
            if (+slider.current.style?.marginLeft.slice(0, -2) != -cardWidth * (cards.length - selectedProduct))
                slider.current.style.marginLeft = ((+slider.current.style?.marginLeft.slice(0, -2)) - cardWidth) + "px"; 
        }
    }

    function prev() { // Handles the next button
        if (null != slider.current && (cards != undefined)) {
            if (+slider.current.style?.marginLeft.slice(0, -2) != 0)
                slider.current.style.marginLeft = ((+slider.current.style?.marginLeft.slice(0, -2)) + cardWidth) + "px";  
        }
    }

    function updateNumImages() { // Handles the number of elements to show in the carousel
      const currentWidth = window.innerWidth;
      //console.log("screen width ", currentWidth);
      if (currentWidth < 640) { 
        setselectedProduct(1);
        if(lastWidth != currentWidth){ // Reloads the page when the screen width changes
          window.location.reload();
        }       
      } 
      // else if (currentWidth < 1024) { 
      //   setselectedProduct(2);
      //   if(lastWidth != currentWidth){
      //     window.location.reload();
      //   }
      // } 
      // else if (currentWidth < 1280) {
      //   setselectedProduct(3);
      //   if(lastWidth != currentWidth){
      //     window.location.reload();
      //   }
      // } 
      else {
        setselectedProduct(4);
        if(lastWidth != currentWidth){
          window.location.reload();
        }     
      }
      lastWidth = currentWidth;
    };

    useEffect(() => { 
        if(sliderContainer.current){
            //console.log("client width ", sliderContainer.current.clientWidth)
            setCardWidth(sliderContainer.current.clientWidth / selectedProduct);               
        }
        window.addEventListener('resize', updateNumImages); // Event listener for the window resize
        lastWidth = window.innerWidth; 
        updateNumImages();     
        return () => window.removeEventListener('resize', updateNumImages);
    }, [sliderContainer, selectedProduct]);

    return ( //Buttons, carousel, and titles
      <div data-testid='carousel'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center py-8'>
            <h1 className='text-xl italic text-black'>{props.title}</h1>
            <h2 className='text-3xl text-black'>{props.subtitle}</h2>
          </div>
          <div className='flex mt-32'>
                <div className='w-2/12 flex items-center'>
                    <div className='w-full text-right'>
                        <button data-testid='prev' onClick={prev} className='text-4xl'><IoIosArrowDropleftCircle/></button>
                    </div>
                </div>
                <div id="sliderContainer" className='w-10/12 overflow-hidden' ref={sliderContainer}> 
                    <ul id="slider" className='flex w-full border-blue-300' ref={slider}>
                        {props.products.map((product, index) => (
                            <li className='w-96 p-1' key={product.id}>
                                <div className='rounded-lg p-1 h-full'> 
                                    <Product id={product.id} name={product.name} price={product.price} image={product.image} />         
                                </div>                                
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-2/12 flex items-center'>
                    <div className='w-full'>
                        <button data-testid='next' onClick={next} className='text-4xl'><IoIosArrowDroprightCircle/></button>
                    </div>
                </div>
          </div>
          <div className='flex justify-center py-20'>                  
          <button className='p-3 rounded-xl bg-red-700 border-gray-100 shadow-lg text-white'> SHOP BEST SELLERS </button>                   
          </div>
        </div>
      </div>
    )
}