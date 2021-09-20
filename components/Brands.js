import Image from "next/image";
export default function Brands() {
  return (
    <div className="flex mt-14">
      <div className="flex w-screen">
        <div className="flex flex-col w-full m-auto place-items-center">
          <div className="flex flex-col m-auto place-items-center">
            <div className="font-bold text-3xl">
              The most recognized brands in the world love Bitly
            </div>
            <div className="flex space-x-14 mt-10">
              <div className="flex">
                <Image src="/espn.png" alt="" height={50} width={100} />
              </div>
              <div className="flex">
                <Image src="/disney.jpg" alt="" height={50} width={100} />
              </div>
              <div className="flex">
                <Image src="/amazon.jpg" alt="" height={50} width={100} />
              </div>
              <div className="flex">
                <Image
                  className="filter grayscale"
                  src="/Buzzfeed.jpg"
                  alt=""
                  height={50}
                  width={100}
                />
              </div>
              <div className="flex">
                <Image src="/nyork.png" alt="" height={50} width={100} />
              </div>
              <div className="flex">
                <Image
                  className="filter grayscale"
                  src="/gartner.png"
                  alt=""
                  height={50}
                  width={100}
                />
              </div>
              <div className="flex">
                <Image src="/Bose.jpg" alt="" height={70} width={100} />
              </div>
            </div>
          </div>
          <div className="w-2/3 mt-16 place-item-center m-auto border rounded-sm border-gray-200 " />
        </div>
      </div>
    </div>
  );
}
