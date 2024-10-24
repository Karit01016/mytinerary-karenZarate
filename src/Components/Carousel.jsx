import React, { useState, useEffect } from 'react';

const colombianCities = [
  { name: 'Bogotá', image: 'https://content.skyscnr.com/m/67f4e21849187647/original/GettyImages-167217640_doc.jpg' },
  { name: 'Medellín', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/10/5f/26/2c.jpg' },
  { name: 'Cali', image: 'https://www.cali.gov.co/gobierno/info/principal/media/pubInt/thumbs/thpub_700x400_147956.jpg' },
  { name: 'Cartagena', image: 'https://www.viajes.cl/hubfs/Torre%20del%20Reloj%20en%20Cartagena%20de%20Indias,%20Colombia.jpg' },
  { name: 'Barranquilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn1hEOwQc7kX6RC3b3IpBdLiI-wZ6sZwpVw&s' },
  { name: 'Bucaramanga', image: 'https://www.shutterstock.com/image-photo/hormiga-culona-sculpture-bucaramanga-ciudad-600nw-2257769405.jpg' },
  { name: 'Pereira', image: 'https://media.gettyimages.com/id/459032229/es/foto/pereira-catedral-interior-colombia.jpg?s=612x612&w=gi&k=20&c=GmUnKL51s4ORpnMoVYf2COWUAsl3__07vpDpINU_Vew=' },
  { name: 'Manizales', image: 'https://media.istockphoto.com/id/1148942415/es/foto/plaza-de-bolivar-in-manizales-colombia.jpg?s=612x612&w=0&k=20&c=cP_IPW5ymOT7boERfzh_tM7Co_NDmqKkqpFuh-YxoLc=' },
  { name: 'Santa Marta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMv2nDEBGPiNOCRzwUD9anfmyScFrQFP8VQ&s' },
  { name: 'Cúcuta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jg_jJdYsJqxjD6Ccrjn4iD7I1LsmOmC5uA&s' },
  { name: 'Ibagué', image: 'https://i1.wp.com/mejoreszonas.com/wp-content/uploads/2019/12/Las-mejores-zonas-donde-alojarse-en-Ibague-Colombia.jpg?fit=1200%2C675&ssl=1' },
  { name: 'Villavicencio', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8cJeG-6ims066Zf-x7OjfTI-2YISj1DSog&s' },
];


function Carousel() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const slides = [];
 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  for (let i = 0; i < colombianCities.length; i += (windowWidth<768?2:4)) {
    slides.push(colombianCities.slice(i, i + (windowWidth<768?2:4)));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative ">
      <div className="overflow-hidden ">
        <div className="flex transition-transform duration-500 " style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-around">
              {slide.map((city, idx) => (
                <div key={idx} className="w-1/2 md:w-1/4 p-2 ">
                  <img src={city.image} alt={city.name} className="w-full h-96 object-cover rounded-md" />
                  <p className="text-center mt-2 font-serif">{city.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
     
      <button onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">
        &lt;
      </button>
      <button onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
