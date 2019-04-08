import {useEffect} from 'react';

export default (ref, load) => {
  useEffect(() => {
    if (!window.IntersectionObserver) {
      load();
    }

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