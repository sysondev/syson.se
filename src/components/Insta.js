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
  const VIDEO = 'VIDEO';
  useLazy(heading, () => setLoaded(true));

  const fetchPosts = async () => {
    const response = await fetch(
      'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=IGQVJWb3ZA1dUljcVNzcFhXU0hhOGpobkdvNTNZAd0FHc3BhbkhzZAncwNUhjMWx4M3dTbnN4UGtlR2NHZA3FZASF9fVjNTS3ZAiQVdjWDRoaHlSR3ljUWt3cnExMjg5ZAkptTmdzRVctTGJn',
      { headers: { Accept: 'application/json' } }
    );
    const json = await response.json();
    setPosts(json.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getImageUrl = post => post.media_type === VIDEO ? post.thumbnail_url : post.media_url;

  return (
    <>
      <div className='container'>
        <h2 ref={heading}>
          <a href='https://www.instagram.com/syson.se/'>@syson.se</a> på
          Instagram <Emoji src={cameraWithFlash} />
        </h2>
      </div>
      {posts && <div className={styles.wrapper}>
        <Masonry
          breakpointCols={{ default: 3, 720: 4, 1024: 6 }}
          className={styles.masonry}
          columnClassName={styles.masonryColumn}
        >
          {posts.map(post => (
            <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
              {loaded && (
                <picture>
                  <img
                    className={styles.image}
                    src={getImageUrl(post)}
                    alt={post.caption}
                  />
                </picture>
              )}
            </a>
          ))}
        </Masonry>
      </div>}
    </>
  );
};
