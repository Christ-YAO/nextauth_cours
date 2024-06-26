import LoginButton from "@/auth/LoginButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import LogoutButton from "@/auth/LogoutButton";
import User from "@/auth/User";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  if (session?.user) {
    return (
      <main className="flex min-h-screen flex-col gap-4 items-center justify-center px-8 md:px-12">
        <code className=" bg-slate-900 py-2 px-4 rounded">NEXT_AUTH + PRISMA _ COURS</code>
        <User />
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          Welcome {session.user.name}
        </h1>
        <LogoutButton />
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-center px-8 md:px-12">
      <code className=" bg-slate-900 py-2 px-4 rounded">NEXT_AUTH + PRISMA _ COURS</code>
      <User />
      <LoginButton />
    </main>
  );
}
