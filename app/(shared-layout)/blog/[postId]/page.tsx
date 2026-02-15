import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import CommentSection from '@/components/web/CommentSection';

interface PostIdRouteProps {
  params: Promise<{
    postId: Id<'posts'>;
  }>;
}

const PostIdRoute = async ({ params }: PostIdRouteProps) => {
  const { postId } = await params;

  const post = await fetchQuery(api.posts.getPostById, { postId: postId });

  if (!post) {
    return (
      <div>
        <h1 className="py-20 text-6xl font-extrabold text-red-500">
          No Post found
        </h1>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in relative mx-auto max-w-3xl px-4 py-8 duration-500">
      <Link
        className={buttonVariants({ variant: 'outline', className: 'mb-4' })}
        href="/blog"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>
      <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl shadow-sm">
        <Image
          src={
            post.imageUrl ??
            'https://images.unsplash.com/photo-1768815021727-dbed2f7d6aed?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={post.title}
          fill
          className="transitransition object-cover duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-col space-y-4">
        <h1 className="text-foreground text-4xl font-bold -tracking-tight">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-sm">
          Posted on {new Date(post._creationTime).toLocaleDateString('pl-PL')}
        </p>
      </div>
      <Separator className="my-8" />
      <p className="text-foreground/90 text-lg leading-relaxed whitespace-pre-wrap">
        {post.body}
      </p>
      <Separator className="my-8" />

      <CommentSection />
    </div>
  );
};

export default PostIdRoute;
