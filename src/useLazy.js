import { useEffect } from 'react';
import 'intersection-observer'; // Polyfill for IOS Safari

export default (ref, load) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('intersected!');
            load();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100%' }
    );
    observer.observe(ref.current);
  }, [ref, load]);
};
