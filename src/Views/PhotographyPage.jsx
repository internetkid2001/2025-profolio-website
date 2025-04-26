import React, { useState, useEffect } from 'react';
import './PhotographyPage.css';

const imagePaths = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',
  '10.jpg', '11.jpg', '12.jpg', '13.png', '14.png', '15.jpg', '16.jpg', '17.jpg',
  '18.jpg', '19.jpg', '20.jpg', '20-1.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg',
  '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg',
  '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
  '41.jpg'
];

const basePath = '/photos/Current Photos/';

const PhotographyPage = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  useEffect(() => {
    if (modalIndex !== null) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowRight') {
          setModalIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        } else if (e.key === 'ArrowLeft') {
          setModalIndex((prevIndex) =>
            (prevIndex - 1 + imagePaths.length) % imagePaths.length
          );
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [modalIndex]);

  return (
    <div className="photography-container">
      <h1 className="photography-title">Photography</h1>
      <div className="photo-grid">
        {imagePaths.map((fileName, index) => (
          <img
            key={index}
            src={`${basePath}${fileName}`}
            alt={`Current ${index + 1}`}
            className="photo-item"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {modalIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={`${basePath}${imagePaths[modalIndex]}`}
            alt={`Current ${modalIndex + 1}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default PhotographyPage;
