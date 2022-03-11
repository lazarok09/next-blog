import { useEffect } from 'react';
import { loadPosts } from '../api/load-posts';
import { Home } from '../templates/Home/Home';

export default function Index() {
  useEffect(() => {
    loadPosts().then((response) => console.log(response.posts[0].author));
  }, []);

  return <Home />;
}
