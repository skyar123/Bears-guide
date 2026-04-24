import React from 'react';

interface ImageFeatureProps {
  src: string;
  alt: string;
  caption: string;
}

export function ImageFeature({ src, alt, caption }: ImageFeatureProps) {
  return (
    <figure className="image-container" style={{ margin: '2.5rem 0' }}>
      <img src={src} alt={alt} />
      <figcaption className="image-caption">{caption}</figcaption>
    </figure>
  );
}
