'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const BlogPage = () => {
  const data = useQuery(api.posts.getPosts);
  return (
    <div>
      <h1>Hello</h1>
      <p>{data?.[0].title}</p>
    </div>
  );
};

export default BlogPage;
