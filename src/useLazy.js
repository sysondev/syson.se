import {useEffect} from 'react';
import 'intersection-observer'; // Polyfill for IOS Safari

export default (ref, load) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          load()
          observer.disconnect();
        }
      });
    })
    observer.observe(ref.current);
  }, []);
} 