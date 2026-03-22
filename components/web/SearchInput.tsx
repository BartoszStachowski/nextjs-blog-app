import { Loader2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Link from 'next/link';

export const SearchInput = () => {
  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);

  const results = useQuery(
    api.posts.searchPosts,
    term.length >= 2 ? { limit: 5, term: term } : 'skip'
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    setOpen(true);
  };

  return (
    <div className="relative z-10 w-full max-w-sm">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-2.5 left-2.5 size-4" />
        <Input
          type="search"
          placeholder="Search Posts..."
          className="bg-background w-full pl-8"
          value={term}
          onChange={handleInputChange}
        />
      </div>
      {open && term.length >= 2 && (
        <div className="bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 absolute top-full mt-2 flex rounded-md border shadow-md outline-none">
          {results === undefined ? (
            <div className="text-muted-foreground flex items-center justify-center p-4 text-sm">
              <Loader2 className="mr-2 size-4 animate-spin" />
              Searching...
            </div>
          ) : results.length === 0 ? (
            <p className="text-muted-foreground p-4 text-center text-sm">
              No results found!
            </p>
          ) : (
            <div className="py-1">
              {results.map((post) => (
                <Link
                  href={`/blog/${post._id}`}
                  key={post._id}
                  className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer flex-col px-4 py-2 text-sm"
                  onClick={() => {
                    setOpen(false);
                    setTerm('');
                  }}
                >
                  <p className="truncate font-medium">{post.title}</p>
                  <p className="text-xx text-muted-foreground pt-1">
                    {post.body.substring(0, 60)}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
