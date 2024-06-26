"use client";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

export default function LoginButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        startTransition(async () => {
          await signIn();
        });
      }}
      className="rounded"
    >
      {isPending ? (
        <Loader className="mr-2" size={12} />
      ) : (
        <LogIn className="mr-2" size={12} />
      )}
      Login
    </Button>
  );
}
