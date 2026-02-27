'use client';

import { useState } from 'react';
import Image from 'next/image';
import { baseURL } from '@/services/baseURL.services';
import { getThumbnailPath } from '@/utils/image';

export default function ProductImage({ imagePath, alt, sizes, priority = false }) {
  const thumbnailSrc = `${baseURL}/${getThumbnailPath(imagePath)}`;
  const originalSrc = `${baseURL}/${imagePath}`;
  const [src, setSrc] = useState(thumbnailSrc);

  return (
    <Image
      alt={alt}
      sizes={sizes}
      src={src}
      fill
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => {
        if (src === thumbnailSrc) setSrc(originalSrc);
      }}
    />
  );
}
