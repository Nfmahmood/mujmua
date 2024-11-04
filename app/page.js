import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="boy from pakistan"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-normal">
          The best free stock photos, royalty free images & videos shared by
          creators from Pakistan.
        </h1>

        <input
          type="text"
          className=" px-8 py-6 text-primary-800 text-sm font-semibold"
          placeholder="Search for free photos"
        />

        <Link
          href="/explore"
          className="bg-yellow-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-yellow-600 transition-all"
        >
          Explore Collections
        </Link>
      </div>
    </main>
  );
}
