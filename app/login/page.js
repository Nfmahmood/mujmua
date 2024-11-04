import Login from "../_components/Login";
import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold -mb-7">Sign in to Majmua</h2>
      <h3 className="text-gray-400">
        More than 3 million free photos and videos to bring your ideas to life.
      </h3>

      <SignInButton />
      <h2 className="text-gray-400 -mb-10">Or, log in with your email</h2>

      <Login />
    </div>
  );
}
