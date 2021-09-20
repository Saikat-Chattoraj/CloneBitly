import Image from "next/image";
import Link from "next/link";
import { BsChevronDoubleDown } from "react-icons/bs";
export default function About() {
  return (
    <div className="flex">
      <div className="flex w-screen">
        <div className="flex flex-col w-full m-auto place-items-center">
          <div className="flex place-items-center m-auto mt-4">
            <div className="flex flex-col place-items-center m-auto text-lg text-gray-500">
              <div>Scroll to Learn More</div>
              <div>
                <BsChevronDoubleDown />
              </div>
            </div>
          </div>
          <div className="flex mt-14">
            <div className="flex flex-col m-auto place-items-center">
              <div className="flex font-extrabold text-4xl">
                The link shortener that has your brand’s back
              </div>
              <div className="mt-1 text-gray-700">
                Your brand wasn’t built to be hidden. Help it stand out with
                branded links that drive 34% more clicks.
              </div>
            </div>
          </div>
          <div className="flex mt-24">
            <div className="container m-auto space-x-2 flex">
              <div className="flex flex-col m-auto place-items-center">
                <div className="flex">
                  <Image src="/brand1.png" alt="" height={200} width={400} />
                </div>
                <div className="flex flex-col m-auto">
                  <div className="font-bold">Inspire trust</div>
                  <div>
                    With more clicks comes increased brand recognition and
                    consumer trust in your communications—which in turn inspires
                    even more engagement with your links. (It’s a wonderful
                    cycle.)
                  </div>
                </div>
              </div>
              <div className="flex flex-col m-auto place-items-center">
                <div className="flex">
                  <Image src="/brand2.png" alt="" height={200} width={400} />
                </div>
                <div className="flex flex-col m-auto">
                  <div className="font-bold">Boost results</div>
                  <div>
                    On top of better deliverability and click-through, rich
                    link-level data gives you crucial insight into your link
                    engagement so your team can make smarter decisions around
                    its content and communications.
                  </div>
                </div>
              </div>
              <div className="flex flex-col m-auto place-items-center">
                <div className="flex">
                  <Image src="/brand3.png" alt="" height={200} width={400} />
                </div>
                <div className="flex flex-col m-auto">
                  <div className="font-bold">Gain control</div>
                  <div>
                    Take credit for your content and learn more about how it’s
                    consumed by enabling auto-branding—a feature that ensures
                    your brand remains in any link someone shortens pointing to
                    your website.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-16">
            <div className="flex flex-col m-auto place-items-center">
              <div className="flex">
                <button className=" bg-blue-100 rounded-md active:ring-2 hover:bg-blue-200 text-blue-500 px-7 py-4">
                  Get Started for Free!
                </button>
              </div>
              <div className="mt-2 flex hover:text-gray-500 text-blue-500">
                <Link href="/">
                  <a>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3 mt-16 place-item-center border-gray-200 border rounded-sm m-auto" />
        </div>
      </div>
    </div>
  );
}
