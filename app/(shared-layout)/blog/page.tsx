import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPage = () => {
  return (
    <div className="py-12">
      <div className="pb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Blog
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl pt-4 text-xl">
          Insights, thoughts and trends from our team.
        </p>
      </div>

      <Suspense fallback={<SkeletonLoadingUi />}>
        <LoadBlogList />
      </Suspense>
    </div>
  );
};

const LoadBlogList = async () => {
  const data = await fetchQuery(api.posts.getPosts);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => (
        <Card key={post._id} className="pt-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={
                post.imageUrl ??
                'https://images.unsplash.com/photo-1768815021727-dbed2f7d6aed?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt="image"
              fill
              className="obj rounded-t-lg object-cover"
            />
          </div>
          <CardContent>
            <Link href={`/blog/${post._id}`}>
              <h1 className="hover:text-primary text-2xl font-bold">
                {post.title}
              </h1>
            </Link>
            <p className="text-muted-foreground line-clamp-3">{post.body}</p>
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({
                className: 'w-full',
              })}
              href={`/blog/${post._id}`}
            >
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

const SkeletonLoadingUi = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[...Array(3)].map((_, i) => (
      <div className="flex flex-col space-y-3" key={i}>
        <Skeleton className="h-48 w-full rounded-xl" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="w-fulll h-4" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

export default BlogPage;
