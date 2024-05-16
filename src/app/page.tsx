import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white  w-full h-screen flex  justify-center items-center">
      <div className="flex-col bg-gray-200 p-32 rounded-md space-y-4 shadow-2xl">
        <h1 className="text-black text-3xl text-center px-4 py-6 mb-12 rounded-full font-semibold shadow-2xl bg-rose-600">
          MENU
        </h1>
        <div className="flex justify-between">
          <Link href="/login" prefetch={true}>
            <button className="bg-white text-xl w-28 text-black hover:bg-rose-400 transition duration-300 rounded-l-md border-r-2 border-rose-600 p-2 bg-opacity-80">
              Login
            </button>
          </Link>
          <Link href="/register" prefetch={true}>
            <button className="bg-white text-xl w-28 text-black border-l-2 hover:bg-rose-400 transition duration-300 border-rose-600 rounded-r-md p-2 bg-opacity-80">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
