import { useEffect } from 'react';

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
