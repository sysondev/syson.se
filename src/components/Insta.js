import React, { useEffect, useRef, useState } from 'react';
import cameraWithFlash from '../emojis/camera-with-flash.png';
import useLazy from '../utils/useLazy';
import Emoji from './Emoji';
import styles from './Insta.module.css';
import Masonry from './Masonry';

export default () => {
  const heading = useRef();
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useLazy(heading, () => setLoaded(true));

  const fetchPosts = async () => {
    const response = await fetch(
      '//api.instagram.com/v1/users/1805388781/media/recent/?access_token=1805388781.6f84264.ba97662b8d0240579d138931a4d06671',
      { headers: { Accept: 'application/json' } }
    );
    const json = await response.json();
    setPosts(json.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className='container'>
        <h2 ref={heading}>
          <a href='https://www.instagram.com/syson.se/'>@syson.se</a> på
          Instagram <Emoji src={cameraWithFlash} />
        </h2>
      </div>
      <div className={styles.wrapper}>
        <Masonry
          breakpointCols={{ default: 3, 720: 4, 1024: 6 }}
          className={styles.masonry}
          columnClassName={styles.masonryColumn}
        >
          {posts.map(post => (
            <a key={post.id} href={post.link}>
              {loaded && (
                <picture>
                  <source
                    media='(max-width: 960px)'
                    srcSet={post.images.low_resolution.url}
                  />
                  <source srcSet={post.images.standard_resolution.url} />
                  <img
                    className={styles.image}
                    src={post.images.low_resolution.url}
                    alt={post.caption.text}
                  />
                </picture>
              )}
            </a>
          ))}
        </Masonry>
      </div>
    </>
  );
};
