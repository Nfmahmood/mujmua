import Link from "next/link";

function Login() {
  return (
    <form className="max-w-md mx-auto mt-10 grid-flow-dense">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div>
        <button className="bg-yellow-500 flex items-center gap-6 text-lg border border-primary-300 px-20 py-2 font-medium tracking-widest">
          <Link href="/profile">Log in</Link>
        </button>
      </div>
    </form>
  );
}

export default Login;

("flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium");
