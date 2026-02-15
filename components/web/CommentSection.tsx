import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const CommentSection = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 border-b">
        <MessageSquare className="size-5" />
        <h2 className="text-xl font-bold">5 comments</h2>
      </CardHeader>
      <CardContent>
        <form></form>
      </CardContent>
    </Card>
  );
};

export default CommentSection;
