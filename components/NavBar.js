import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="py-1 bg-white inset-x-0 fixed top-0 z-50">
      <div className="flex w-100 ">
        <div className="flex w-auto m-auto space-x-9 py-1 px-2 place-items-center justify-between">
          <div id="logo" className="mt-1 mr-10">
            <Link href="/">
              <a>
                <Image
                  src="/bitly.png"
                  alt="no image"
                  width={100}
                  height={90}
                />
              </a>
            </Link>
          </div>
          <div id="profilelink" className="flex">
            <div className="flex space-x-40">
              <div className="flex space-x-7 ">
                <div className=" hover:text-indigo-600 hover:underline">
                  <Link href="/WhyBitly">
                    <a>Why Bitly?</a>
                  </Link>
                </div>
                <div className=" hover:text-indigo-600 hover:underline">
                  <Link href="/Solutions">
                    <a>Solutions</a>
                  </Link>
                </div>
                <div className=" hover:text-indigo-600 hover:underline">
                  <Link href="/Features">
                    <a>Features</a>
                  </Link>
                </div>
                <div className=" hover:text-indigo-600 hover:underline">
                  <Link href="/Pricing">
                    <a>Pricing</a>
                  </Link>
                </div>
                <div className=" hover:text-indigo-600 hover:underline">
                  <Link href="/Resources">
                    <a>Resources</a>
                  </Link>
                </div>
              </div>
              <div className="flex space-x-7">
                <div className=" hover:text-indigo-600 hover:underline">
                  <Link href="/Login">
                    <a>Log in</a>
                  </Link>
                </div>
                <div className=" text-indigo-500 hover:text-indigo-700 hover:underline">
                  <Link href="/Signup">
                    <a>Sign up Free</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="quotesbutton">
            <button className=" rounded-md bg-blue-700 py-2 px-1 text-white hover:bg-indigo-700 active:ring-2 ">
              Get More Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
