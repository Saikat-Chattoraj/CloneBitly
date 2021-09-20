export default function CtaButton() {
    return (
        <div className="flex">
            <div className="flex w-screen bg-gray-800 h-80 mt-20">
                <div className="flex flex-col w-full">
                    <div className="flex place-items-center m-auto text-4xl text-white font-extrabold">
                        More than a Free Link Shortener
                    </div>
                    <div className="flex place-items-center m-auto">
                        <button className="text-white font-bold text-lg bg-indigo-600 rounded-md px-10 py-6 active:ring-2 hover:bg-gradient-to-r from-indigo-600 to-indigo-900">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
