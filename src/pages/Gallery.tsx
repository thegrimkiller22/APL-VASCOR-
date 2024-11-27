import React from 'react';

// Example array of image URLs
const galleryImages = [
  'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
  // Add more image URLs as needed
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container">
      <h1 className="text-center text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
        <div className="gallery-container">
  <h1 className="text-center text-4xl font-bold mb-8">Gallery</h1>
  <div className="grid grid-cols-3 gap-4">
    {galleryImages.map((image, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
    
  );
};

export default Gallery;