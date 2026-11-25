'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SmartImageProps extends ImageProps {
  fallbackSrc?: string;
}

export function SmartImage({
  src,
  fallbackSrc = 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
  alt,
  ...rest
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...rest}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt || 'Image'}
      unoptimized={hasError}
      referrerPolicy="no-referrer"
      onError={() => {
        setHasError(true);
      }}
    />
  );
}
