import React, { useEffect, useRef } from 'react';
import styles from './Map.module.css';

const theParkSveavagenLocation = { lat: 59.3424874, lng: 18.0572211 };
const theParkHalsingegatanLocation = { lat: 59.3466611, lng: 18.0382911 };
const theParkSodermalmLocation = { lat: 59.3118736, lng: 18.0593306 };

const loadGoogleMaps = onLoad => {
  const script = document.createElement('script');
  script.src =
    '//maps.googleapis.com/maps/api/js?key=AIzaSyAr56WKXjNbvehf7vOI8y4m0Qsyl9PiPww';
  script.id = 'googleMaps';
  document.body.appendChild(script);

  script.onload = () => {
    onLoad();
  };
};

export default () => {
  const element = useRef();

  function initMap() {
    const map = new window.google.maps.Map(element.current, {
      center: { lat: 59.3347953, lng: 18.0306792 },
      zoom: 12
    });
    new window.google.maps.Marker({
      position: theParkSveavagenLocation,
      map,
      icon: '/images/syson-google-marker.png'
    });
    new window.google.maps.Marker({
      position: theParkHalsingegatanLocation,
      map,
      icon: '/images/syson-google-marker.png'
    });
    new window.google.maps.Marker({
      position: theParkSodermalmLocation,
      map,
      icon: '/images/syson-google-marker.png'
    });
  }

  useEffect(() => {
    loadGoogleMaps(initMap);
  }, []);

  return <div ref={element} className={styles.map} />;
};
