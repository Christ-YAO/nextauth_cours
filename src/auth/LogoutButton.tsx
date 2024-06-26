"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTransition } from "react";
import Loader from "@/components/ui/loader";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="rounded">
          <LogOut className="mr-2" size={12} />
          Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-md">
            Are you sure you want to logout?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant={"secondary"} className="rounded">
              Cancel
            </Button>
          </AlertDialogCancel>
          <Button
            variant={"destructive"}
            onClick={() => {
              startTransition(async () => {
                await signOut();
              });
            }}
            className="rounded"
          >
            {isPending ? (
              <Loader className="mr-2" size={12} />
            ) : (
              <LogOut className="mr-2" size={12} />
            )}
            LogOut
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
