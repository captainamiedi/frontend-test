import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref: React.RefObject<HTMLDivElement>, callback: () => void, loading: boolean) => {
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !loading) {
            callback();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, callback, loading]);
  };

  export { useIntersectionObserver };