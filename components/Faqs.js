export default function Faqs() {
  return (
    <div className="flex">
      <div className="flex w-screen">
        <div className="flex flex-col w-full m-auto">
          <div className="flex font-bold place-items-center m-auto text-3xl text-gray-800 mt-20">
            Frequently asked questions
          </div>
          <div className="flex w-2/3 text-left place-items-center font-extrabold text-lg px-16 py-4 border-b cursor-pointer border-gray-100 m-auto hover:bg-gray-200 mt-7">
            What is a URL Shortener?
          </div>
          <div className="flex w-2/3 text-left place-items-center font-extrabold text-lg px-16 py-4 border-b cursor-pointer border-gray-100 m-auto hover:bg-gray-200">
            Benefits of a Short URL
          </div>
          <div className="flex w-2/3 text-left place-items-center font-extrabold text-lg px-16 py-4 m-auto cursor-pointer border-b border-gray-100 hover:bg-gray-200">
            What is a Custom URL Shortener?
          </div>
          <div className="flex w-2/3 text-left place-items-center font-extrabold text-lg px-16 py-4 m-auto cursor-pointer border-b border-gray-100 hover:bg-gray-200">
            Features of Bitly’s Link Management Platform
          </div>
          <div className="flex w-2/3 textt place-items-center font-extrabold text-lg px-16 py-4 m-auto cursor-pointer hover:bg-gray-100">
            Why Choose Bitly
          </div>
        </div>
      </div>
    </div>
  );
}
