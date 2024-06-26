import { getServerSession, Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { Card } from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";

export default async function User() {
  const session = await getAuthSession();

  if (!session?.user) {
    return <code className="text-accent">No User</code>;
  }

  return (
    <Card className="mt-4 w-full max-w-[400px] p-4">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex flex-col gap-0.5 space-y-2">
          <h3 className="text-2xl font-black">{session.user.name}</h3>
          <p className="text-sm font-extralight">{session.user.email}</p>
          <p className="text-xs font-extralight bg-accent p-1 italic">{session.user.id}</p>
        </div>
        <Avatar size="lg">
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={`${session.user.name}`}
            />
          ) : null}
          <AvatarFallback>
            {session.user.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </Card>
  );
}
