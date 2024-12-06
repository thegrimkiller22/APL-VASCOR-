import React from 'react';

// Example array of image URLs
const galleryImages = [
  'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
  // Add more image URLs as needed
];

// GalleryItem component for each image
const GalleryItem: React.FC<{ imageUrl: string; altText: string }> = ({ imageUrl, altText }) => (
  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
);

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container py-16 px-4 md:px-16 mt-8">
      <h1 className="text-center text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <GalleryItem
            key={index}
            imageUrl={image}
            altText={`Gallery Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
