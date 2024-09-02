import React, { useEffect, useRef, useState } from "react";
import cameraWithFlash from "../emojis/camera-with-flash.png";
import useLazy from "../utils/useLazy";
import Emoji from "./Emoji";
import styles from "./Insta.module.css";
import Masonry from "./Masonry";

interface Post {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url: string;
}

const instaEndpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${
  import.meta.env.VITE_APP_INSTAGRAM_TOKEN
}`;
const fetchPosts = async () => {
  const response = await fetch(instaEndpoint, {
    headers: { Accept: "application/json" },
  });
  const json = await response.json();
  return json.data;
};

export default function Insta() {
  const heading = useRef<HTMLHeadingElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loaded, setLoaded] = useState(false);
  const VIDEO = "VIDEO";
  useLazy(heading, () => setLoaded(true));

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  const getImageUrl = (post: Post) =>
    post.media_type === VIDEO ? post.thumbnail_url : post.media_url;

  return (
    <>
      <div className="container">
        <h2 ref={heading}>
          <a href="https://www.instagram.com/syson.se/">@syson.se</a> på
          Instagram <Emoji src={cameraWithFlash} />
        </h2>
      </div>
      {posts?.length > 0 && (
        <div className={styles.wrapper}>
          <Masonry
            breakpointCols={{ default: 3, 720: 4, 1024: 6 }}
            className={styles.masonry}
            columnClassName={styles.masonryColumn}
          >
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
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
        </div>
      )}
    </>
  );
}
