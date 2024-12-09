'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { SlidercarouselImages } from '@/lib/constants';

const AnimatedBrandSlider: React.FC = () => {
  // Total width to scroll (adjust for padding/margins of images)
  const totalWidth = SlidercarouselImages.length * 198; // 120 = approximate width of one image with margin

  return (
    <div className="overflow-hidden bg-white py-4">
      <motion.div
        className="flex"
        animate={{
          x: [0, -totalWidth], // Starts from right and scrolls to left
        }}
        transition={{
          x: {
            repeat: Infinity, // Loop infinitely
            repeatType: 'loop', // Loop type
            duration: 20, // Adjust speed
            ease: 'linear', // Smooth movement
          },
        }}
      >
        {/* Duplicate images for seamless looping */}
        {[...SlidercarouselImages, ...SlidercarouselImages,...SlidercarouselImages].map((img, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <img
              src={img}
              alt={`Brand ${index + 1}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBrandSlider;