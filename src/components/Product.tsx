import React, { useState, useRef } from 'react';
import { Star, Award, Clock, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import logoIcon from '../assets/logos/logo-icon.png';
import devrajBottle from '../assets/images/products/devraj-bottle.png';
import productBackground from '../assets/images/products/product-background.jpeg';

const Product = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const MIN_ZOOM = 0.8;
  const MAX_ZOOM = 3.5; 
  const ZOOM_STEP = 0.3;

  const handleZoomIn = () => {
    if (zoomLevel < MAX_ZOOM) {
      setZoomLevel(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
      setIsZooming(true);
      setTimeout(() => setIsZooming(false), 300);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > MIN_ZOOM) {
      setZoomLevel(prev => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
      setIsZooming(true);
      setTimeout(() => setIsZooming(false), 300);
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsZooming(true);
    setTimeout(() => setIsZooming(false), 300);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Limit the drag bounds to keep the image within view
      const maxX = (zoomLevel - 1) * 100;
      const maxY = (zoomLevel - 1) * 100;
      
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0 && zoomLevel < MAX_ZOOM) {
      handleZoomIn();
    } else if (e.deltaY > 0 && zoomLevel > MIN_ZOOM) {
      handleZoomOut();
    }
  };

  // Dynamic background blur and darkness based on zoom level
  const backgroundOpacity = Math.max(0.3, 0.7 - (zoomLevel - 1) * 0.2);
  const backgroundBlur = Math.min(8, (zoomLevel - 1) * 3);

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            The Whisky: DEVRAJ
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
  A masterpiece of blending artistry, where premium grain spirits meet carefully aged malts
</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Bottle Display */}
          <div className="relative">
            {/* Premium Badge - Fixed positioning and z-index */}
            <div 
              className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold z-50 transition-all duration-300"
              style={{
                transform: `scale(${1 + (zoomLevel - 1) * 0.1})`,
                boxShadow: `0 ${4 + (zoomLevel - 1) * 2}px ${8 + (zoomLevel - 1) * 4}px rgba(212, 175, 55, 0.3)`
              }}
            >
              PREMIUM
            </div>

            <div 
              ref={imageRef}
              className="relative rounded-2xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              {/* Background Layer - Separate from content */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, ${backgroundOpacity}), rgba(0, 0, 0, ${backgroundOpacity})), url('${productBackground}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: `blur(${backgroundBlur}px)`,
                  transition: 'filter 0.3s ease, background-image 0.3s ease'
                }}
              />

              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 z-40 flex flex-col gap-2">
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= MAX_ZOOM}
                  className="bg-black/70 hover:bg-black/90 disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
                  title="Zoom In (Mouse Wheel Up)"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= MIN_ZOOM}
                  className="bg-black/70 hover:bg-black/90 disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
                  title="Zoom Out (Mouse Wheel Down)"
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  onClick={resetZoom}
                  className="bg-yellow-600 hover:bg-yellow-500 text-black p-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                  title="Reset View"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              {/* Zoom Level Indicator */}
              <div className="absolute top-4 left-4 z-40 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-yellow-400 text-sm font-semibold">
                  {Math.round(zoomLevel * 100)}%
                </span>
              </div>

              {/* Bottle Container - No blur applied here */}
              <div 
                className="w-full h-96 flex items-center justify-center relative z-30 transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                  transformOrigin: 'center center'
                }}
              >
                <div className="text-center relative">
                  {/* Bottle Image - Crystal clear, no blur */}
                  <div 
                    className="w-40 h-80 mx-auto mb-4 flex items-center justify-center relative"
                    style={{
                      filter: `drop-shadow(0 ${10 + (zoomLevel - 1) * 10}px ${20 + (zoomLevel - 1) * 15}px rgba(0, 0, 0, 0.7))`
                    }}
                  >
                    <img 
                      src={devrajBottle} 
                      alt="DEVRAJ Premium Whisky Bottle - Interactive View" 
                      className="w-full h-full object-contain transition-all duration-300 select-none"
                      draggable={false}
                      style={{
                        filter: `brightness(${1 + (zoomLevel - 1) * 0.1}) contrast(${1 + (zoomLevel - 1) * 0.05}) saturate(${1 + (zoomLevel - 1) * 0.1})`
                      }}
                    />
                  </div>

                  {/* Bottle Info - Only show at normal zoom */}
                  <div 
                    className="transition-opacity duration-300"
                    style={{ opacity: zoomLevel <= 1.5 ? 1 : 0 }}
                  >
                    <p className="text-yellow-400 font-bold text-xl">DEVRAJ</p>
                    <p className="text-gray-300 text-sm">Premium Whisky</p>
                  </div>

                  {/* Magnification Ring Effect */}
                  {isZooming && (
                    <div className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>
              </div>

              {/* Instructions Overlay */}
              {zoomLevel > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-yellow-400 text-xs text-center">
                    {isDragging ? 'Dragging...' : 'Click & drag to pan • Scroll to zoom'}
                  </p>
                </div>
              )}
            </div>

            {/* Interaction Hints */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                <ZoomIn size={14} className="text-yellow-400" />
                Use mouse wheel or buttons to zoom • Click and drag when zoomed
              </p>
            </div>
          </div>
          
          {/* Product Information */}
          <div>
            <h3 className="font-playfair text-3xl mb-6">Premium Blended Whisky</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Star className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Premium Grain Spirit</h4>
                  <p className="text-gray-300">Carefully selected grains distilled to perfection, creating a smooth and refined base spirit.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Oak Barrel Aged</h4>
                  <p className="text-gray-300">Matured malts aged in premium oak barrels, developing complex flavors and rich character.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Master Blended</h4>
                  <p className="text-gray-300">Expert craftsmanship ensures perfect harmony between all components.</p>
                </div>
              </div>
            </div>

            {/* Interactive Zoom Feature Highlight */}
            <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 border border-yellow-400/30 p-4 rounded-lg mb-6">
              <h4 className="font-playfair text-lg text-yellow-400 mb-2">Explore Every Detail</h4>
              <p className="text-gray-300 text-sm">
                Use the interactive zoom to examine the craftsmanship of our premium bottle design. 
                Scroll with your mouse wheel or use the controls to get a closer look at the DEVRAJ label, 
                bottle shape, and premium finishing.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="font-playfair text-xl mb-4 text-yellow-400">Tasting Notes</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Appearance</h5>
                  <p className="text-gray-300 text-sm">Warm amber hues with golden highlights</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Aroma</h5>
                  <p className="text-gray-300 text-sm">Hints of caramel and vanilla with subtle spice</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Finish</h5>
                  <p className="text-gray-300 text-sm">Smooth, lingering warmth with oak undertones</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Quality Assured</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Premium Blend</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Handcrafted</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Interactive View</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;