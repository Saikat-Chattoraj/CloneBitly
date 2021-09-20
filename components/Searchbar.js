import Link from "next/link";
export default function Searchbar() {
  return (
    <div className="flex py-6 bg-gray-800 ">
      <div className="flex w-2/3 m-auto place-items-center">
        <div className="flex flex-col m-auto w-full ">
          <div className="flex justify-around">
            <input
              className="h-full w-2/3 px-2 py-5 rounded-lg text-left "
              type="text"
              placeholder="Shorten your URL"
            />
            <div className="flex">
              <button className="flex bg-blue-900 text-white px-28 py-4 rounded-md hover:bg-gradient-to-l from-blue-900 to-indigo-500 active:ring-2">
                Shorten
              </button>
            </div>
          </div>
          <div className=" gap-2 flex place-items-center m-auto mt-1">
            <div className="flex text-gray-400">
              By clicking SHORTEN, you are agreeing to Bitly’s
            </div>
            <div
              id="termslink"
              className="flex hover:text-indigo-600 hover:underline text-gray-400"
            >
              <Link href="/">
                <a> Terms of Service </a>
              </Link>
            </div>
            <div className="flex text-gray-400">and</div>
            <div
              id="privacylink"
              className="flex hover:text-indigo-600 hover:underline text-gray-400"
            >
              <Link href="/">
                <a> Privacy Policy </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
