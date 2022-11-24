import React from 'react';
import img1 from '../../assets/WhatsApp Image 2022-11-24 at 12.01.25 PM (1).jpeg'
import img2 from '../../assets/WhatsApp Image 2022-11-24 at 12.01.25 PM (2).jpeg'
import img3 from '../../assets/WhatsApp Image 2022-11-24 at 12.01.25 PM.jpeg'

const Slider = () => {
    return (
        <div>
<div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative"
  data-bs-ride="carousel"
>
  
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <div class="carousel-inner relative w-full overflow-hidden">
   
    <div class="carousel-item active relative float-left w-full">
      <img
        src={img1}
        class="block w-full max-h-[500px]"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src={img2}
        class="block w-full max-h-[500px]"
        alt="Mountaintop"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
       
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src={img3}
        class="block w-full max-h-[500px]"
        alt="Woman Reading a Book"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>
  </div>
 
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Slider;