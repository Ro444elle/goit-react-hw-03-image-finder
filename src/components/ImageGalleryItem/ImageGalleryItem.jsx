import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, altText, openModal }) => {
  const handleImageClick = () => {
    openModal(imageUrl);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleImageClick}>
      <img
        className={styles.ImageGalleryItemImage}
        src={imageUrl}
        alt={altText}
      />
    </li>
  );
};

export default ImageGalleryItem;
