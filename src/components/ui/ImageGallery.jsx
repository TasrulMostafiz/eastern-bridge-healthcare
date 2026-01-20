import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images, title = "Photo Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="container-custom py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => openImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
            />
            {image.caption && (
              <p className="p-2 text-sm text-gray-600 bg-white">{image.caption}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight size={32} />
              </button>

              <motion.img
                key={selectedImage.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {selectedImage.caption && (
                <div className="text-white text-center mt-4">
                  <p className="text-lg">{selectedImage.caption}</p>
                  <p className="text-sm text-gray-300">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;