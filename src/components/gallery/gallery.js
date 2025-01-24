'use client'; // Ensures this works with client-side rendering in Next.js

import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image'; // Import Next.js Image component
import 'photoswipe/dist/photoswipe.css'; // Import PhotoSwipe CSS
import { baseURL } from '@/services/baseURL.services';
import styles from './gallery.module.css';

const PhotoGallery = ({ listImages }) => {
  return (
    <Gallery>
      <div className={styles.gallery}>
        {listImages.map((imagePath, index) => (
          <Item
            key={index}
            original={`${baseURL}/${imagePath}`} // Full-size image URL
            width="700"
            height="800" // Set width of full image
          >
            {({ ref, open }) => (
              <div ref={ref} onClick={open} className={styles.photoWrapper}>
                <Image
                  src={`${baseURL}/${imagePath}`} // External image URL
                  alt={`Product image ${index + 1}`} // Dynamic alt text
                  fill
                />
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
