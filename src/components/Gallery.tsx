import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Abstract');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories = ['Abstract', 'Landscapes', 'Portraits', 'Minimalist', 'Digital Art'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/src/assets/gallery/Gemini_Generated_Image_13xtu213xtu213xt.jpeg',
      title: 'Abstract Art 1',
      category: 'Abstract'
    },
    {
      id: 2,
      image: '/src/assets/gallery/Gemini_Generated_Image_13xtu513xtu513xt.jpeg',
      title: 'Abstract Art 2',
      category: 'Abstract'
    },
    {
      id: 3,
      image: '/src/assets/gallery/Gemini_Generated_Image_13xtu613xtu613xt.jpeg',
      title: 'Abstract Art 3',
      category: 'Abstract'
    },
    {
      id: 4,
      image: '/src/assets/gallery/Gemini_Generated_Image_2n33ho2n33ho2n33.jpeg',
      title: 'Mountain View',
      category: 'Landscapes'
    },
    {
      id: 5,
      image: '/src/assets/gallery/Gemini_Generated_Image_331ux1331ux1331u.jpeg',
      title: 'Coastal Scene',
      category: 'Landscapes'
    },
    {
      id: 6,
      image: '/src/assets/gallery/Gemini_Generated_Image_37pr6z37pr6z37pr.jpeg',
      title: 'Forest Path',
      category: 'Landscapes'
    },
    {
      id: 7,
      image: '/src/assets/gallery/Gemini_Generated_Image_3gz8ov3gz8ov3gz8.jpeg',
      title: 'Portrait Study 1',
      category: 'Portraits'
    },
    {
      id: 8,
      image: '/src/assets/gallery/Gemini_Generated_Image_3gz8ow3gz8ow3gz8.jpeg',
      title: 'Portrait Study 2',
      category: 'Portraits'
    },
    {
      id: 9,
      image: '/src/assets/gallery/Gemini_Generated_Image_3gz8oy3gz8oy3gz8.jpeg',
      title: 'Portrait Study 3',
      category: 'Portraits'
    },
    {
      id: 10,
      image: '/src/assets/gallery/Gemini_Generated_Image_3gz8p13gz8p13gz8.jpeg',
      title: 'Minimal Design 1',
      category: 'Minimalist'
    },
    {
      id: 11,
      image: '/src/assets/gallery/Gemini_Generated_Image_3nahv13nahv13nah.jpeg',
      title: 'Minimal Design 2',
      category: 'Minimalist'
    },
    {
      id: 12,
      image: '/src/assets/gallery/Gemini_Generated_Image_52pei052pei052pe.jpg',
      title: 'Minimal Design 3',
      category: 'Minimalist'
    },
    {
      id: 13,
      image: '/src/assets/gallery/Gemini_Generated_Image_7awqtl7awqtl7awq.jpeg',
      title: 'Digital Creation 1',
      category: 'Digital Art'
    },
    {
      id: 14,
      image: '/src/assets/gallery/Gemini_Generated_Image_7bvrcz7bvrcz7bvr.jpeg',
      title: 'Digital Creation 2',
      category: 'Digital Art'
    },
    {
      id: 15,
      image: '/src/assets/gallery/Gemini_Generated_Image_7bvrd07bvrd07bvr.jpeg',
      title: 'Digital Creation 3',
      category: 'Digital Art'
    }
  ];

  const filteredItems = galleryItems.filter(item => item.category === activeCategory);
  const currentItem = filteredItems[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-4">
          Explore Our <span className="text-primary-600">Art Gallery</span>
        </h2>
        <p className="section-description">
          Discover a curated collection of stunning artworks across various categories.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto whitespace-nowrap flex-nowrap gap-2 px-2 pl-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentImageIndex(0);
              }}
              className={`px-4 py-2 rounded-lg transition-colors min-w-max ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="relative max-w-xl mx-auto">
          {/* Exact fit without cropping */}
          <div className="bg-gray-100 rounded-xl overflow-hidden h-100 flex items-center justify-center ">
            {currentItem && (
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Title */}
          {currentItem && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 rounded-lg">
              <p className="text-center">{currentItem.title}</p>
            </div>
          )}

          {/* Image Dots */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;