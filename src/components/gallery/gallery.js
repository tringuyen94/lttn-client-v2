'use client';

import React, { useState, useCallback } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import { baseURL } from '@/services/baseURL.services';
import styles from './gallery.module.css';

const PhotoGallery = ({ listImages }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  if (!listImages || listImages.length === 0) return null;

  return (
    <Gallery>
      <div className={styles.gallery} role="group" aria-label="Bộ sưu tập hình ảnh sản phẩm">
        <Item
          original={`${baseURL}/${listImages[activeIndex]}`}
          width="700"
          height="800"
        >
          {({ ref, open }) => (
            <div
              ref={ref}
              onClick={open}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  open(e);
                }
              }}
              className={styles.mainImage}
              role="button"
              tabIndex={0}
              aria-label="Xem hình ảnh kích thước đầy đủ"
            >
              <Image
                src={`${baseURL}/${listImages[activeIndex]}`}
                alt={`Hình ảnh sản phẩm ${activeIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority={activeIndex === 0}
              />
            </div>
          )}
        </Item>

        {listImages.length > 1 && (
          <div className={styles.thumbStrip}>
            {listImages.map((imagePath, index) => (
              <Item
                key={index}
                original={`${baseURL}/${imagePath}`}
                width="700"
                height="800"
              >
                {({ ref }) => (
                  <button
                    ref={ref}
                    type="button"
                    onClick={() => handleThumbClick(index)}
                    className={`${styles.thumb} ${index === activeIndex ? styles.thumbActive : ''}`}
                    aria-label={`Chọn hình ảnh ${index + 1}`}
                    aria-pressed={index === activeIndex}
                  >
                    <Image
                      src={`${baseURL}/${imagePath}`}
                      alt={`Hình ảnh thu nhỏ ${index + 1}`}
                      fill
                      sizes="80px"
                    />
                  </button>
                )}
              </Item>
            ))}
          </div>
        )}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
