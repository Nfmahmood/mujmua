import Link from "next/link";
import SignOutButton from "../_components/SignOutButton";
import { auth } from "../_lib/auth";
import { UserIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div>
      <h1 className="font-semibold text-2xl text-yellow-500 mb-7">
        Welcome, {firstName}
      </h1>

      <SignOutButton />

      <Link
        href="/account/profile"
        className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
      >
        <UserIcon className="h-5 w-5 text-primary-600" />
        <span>Profile</span>
      </Link>
    </div>
  );
}
