'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { SlidercarouselImages } from '@/lib/constants';

const AnimatedBrandSlider: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-4">
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * SlidercarouselImages.length], // Adjust to move the full width of the images
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...SlidercarouselImages, ...SlidercarouselImages].map((img, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <img src={img} alt={`Brand ${index + 1}`} className="h-16 w-auto object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBrandSlider;