import { useState, useEffect } from 'react';

interface UseLazyImageProps {
  src: string;
  placeholder?: string;
  threshold?: number;
}

export const useLazyImage = ({
  src,
  placeholder = '/placeholder.jpg',
  threshold = 0.1
}: UseLazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && !isLoaded) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            // When image is visible in the viewport
            if (
              !didCancel &&
              (entry.intersectionRatio > 0 || entry.isIntersecting)
            ) {
              // Load the actual image
              const img = new Image();
              img.src = src;
              img.onload = () => {
                if (!didCancel) {
                  setImageSrc(src);
                  setIsLoaded(true);
                }
              };
              // Stop observing once we've started loading
              observer.unobserve(imageRef);
            }
          });
        },
        { 
          threshold,
          rootMargin: '100px' // Start loading when image is 100px from viewport
        }
      );
      observer.observe(imageRef);
    }

    return () => {
      didCancel = true;
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageRef, isLoaded, threshold]);

  return { imageSrc, setImageRef, isLoaded };
}; 