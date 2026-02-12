import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const PostIdRoute = () => {
  return (
    <div className="animate-in fade-in relative mx-auto max-w-3xl px-4 py-8 duration-500">
      <Link className={buttonVariants({ variant: 'ghost' })} href="/blog">
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <div className="relative"></div>
    </div>
  );
};

export default PostIdRoute;
