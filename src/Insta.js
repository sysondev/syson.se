import React, { useState, useEffect } from 'react';
import styles from './Insta.module.css';

export default () => {
  const [posts, setPosts] = useState([]);
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
      <h2 className='container'>
        <a href='https://www.instagram.com/syson.se/'>@syson.se</a> på
        Instagram
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {posts.map(post => (
            <a key={post.id} href={post.link}>
              <img
                className={styles.image}
                src={post.images.standard_resolution.url}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
