import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Whisky pouring",
      category: "Lifestyle"
    },
    {
      src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Premium bottles",
      category: "Product"
    },
    {
      src: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Distillery barrels",
      category: "Distillery"
    },
    {
      src: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Bar celebration",
      category: "Lifestyle"
    },
    {
      src: "https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Distillation equipment",
      category: "Process"
    },
    {
      src: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Bottling line",
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