import React from 'react';
import galleryWhiskyPouring from '../assets/images/gallery/gallery-whisky-pouring.png';
import galleryBottles from '../assets/images/gallery/gallery-bottles.png';
import galleryBottles2 from '../assets/images/gallery/gallery-bottles-2.png';
import galleryBottles3 from '../assets/images/gallery/gallery-bottles-3.png';
import galleryProduction from '../assets/images/gallery/gallery-production.png';
import galleryBottling from '../assets/images/gallery/gallery-bottling.png';

const Gallery = () => {
  const images = [
    {
      src: galleryWhiskyPouring,
      alt: "Premium whisky pouring into glass",
      category: "Lifestyle"
    },
    {
      src: galleryBottles,
      alt: "DEVRAJ premium bottles collection",
      category: "Product"
    },
    {
      src: galleryBottles2,
      alt: "DEVRAJ luxury bottle showcase",
      category: "Product"
    },
    {
      src: galleryBottles3,
      alt: "Premium DEVRAJ bottle display",
      category: "Product"
    },
    {
      src: galleryProduction,
      alt: "Distillation equipment and production process",
      category: "Process"
    },
    {
      src: galleryBottling,
      alt: "Precision bottling line at Devraj Distillery",
      category: "Production"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the artistry behind every bottle through our curated collection of moments, processes, and celebrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                    {image.category}
                  </span>
                  <p className="text-white mt-2 font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Follow us on social media for more behind-the-scenes content</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-black text-white px-4 py-2 rounded-lg transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="bg-gray-800 hover:bg-yellow-400 hover:text-black text-white px-4 py-2 rounded-lg transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;