import Image from 'next/image'

function MainContent() {
    function onToggle() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle("-translate-x-full")
    }
    return (
        <div>
            <main className="flex">
                {/* Sidebar */}
                <div className="sidebar bg-gray-50 dark:bg-[#0A0806] w-[50%] lg:w-[24%] absolute inset-y-0 left-0 -translate-x-full transition duration-200 ease-in-out lg:fixed lg:translate-x-0">
                    <h1 className="pt-24">
                        sidebar
                    </h1>
                </div>
                <div className="h-screen hidden max-w-xs w-full xl:block"></div>
                {/* INTRO SECTION */}
                <section className="pt-14 min-h-screen">
                    <div className="items-center pt-4 lg:pt-8 px-6 lg:px-4 mx-auto">
                        <div className="w-full mx-auto text-center lg:w-8/12">
                            <button onClick={onToggle}>
                                toggle
                            </button>
                            <h1 className=" text-blue-600 text-lg font-bold font-montserrat uppercase tracking-widest">#devstash</h1>
                            <h1 className=" tracking-tighter md:tracking-tight dark:text-white font-bold text-4xl md:text-5xl xl:text-6xl font-montserrat ">A list of
                                coding resources for noobies and new devs <span>
                                    <Image src="https://emojis.slackmojis.com/emojis/images/1600706728/10521/meow_code.gif?1600706728" alt="Picture of the author"
                                        width={40}
                                        height={40} />
                                </span></h1>
                            <h1 className=" text-gray-600 dark:text-gray-400 font-semibold text-base md:text-xl font-montserrat leading-relaxed">There are lots of tools to choose from, and it’s hard to find the right ones. That’s why I created this list – so you save time by easily finding the best stuff out there.</h1>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}


export default MainContent
