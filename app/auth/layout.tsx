import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="top-5 left-5 absolute">
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ArrowLeft className="size-4" />
          Go back
        </Link>
      </div>
      <div className="mx-auto w-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
