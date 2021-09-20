import Image from "next/image";
import Link from "next/link";
export default function Feed() {
  return (
    <div className="flex mt-28">
      <div className="container m-auto flex w-8/5">
        <div className="flex flex-col m-auto ">
          <div className="flex font-bold text-6xl text-left">
            Short links, big results
          </div>
          <div className="flex text-2xl mt-1 text-left text-gray-500">
            A URL shortener built with powerful tools to help you grow and
            protect your brand.
          </div>
          <div className="flex flex-col w-full">
            <div>
              <button
                className="bg-blue-700 rounded-md py-4 px-6 mt-14 text-white
                   hover:bg-indigo-700 active:ring-2"
              >
                Get Started for Free!
              </button>
            </div>
            <div id="feedlink" className="flex ml-10 mt-1">
              <div className="hover:text-gray-500 cursor-pointer">
                <Link href="/GetaQuote">
                  <a>Get a Quote</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  py-1 ">
          <Image
            src="/girl.jpg"
            alt="Image Preview not Available"
            height={700}
            width={1200}
          />
        </div>
      </div>
    </div>
  );
}
