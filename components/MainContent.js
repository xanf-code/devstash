import Image from 'next/image'

function MainContent() {
    return (
        <div className="transform: translateY(0px) translateZ(0px)">
            <main >
                {/* INTRO SECTION */}
                <section>
                    <div className="items-center pt-4 lg:pt-8 md:flex-row px-6 lg:px-4 mx-auto">
                        <div className="w-full mx-auto text-center lg:w-8/12">
                            <h1 className="text-blue-600 text-lg font-bold font-montserrat">#DEVSTASH</h1>
                            <h1 className="text-black dark:text-white font-extrabold text-5xl font-montserrat ">A list of
                                resources for noobies and new devs <span>
                                    <Image src="https://emojis.slackmojis.com/emojis/images/1580448086/7667/think-about-it.png?1580448086" alt="Picture of the author"
                                        width={30}
                                        height={30} />
                                </span></h1>
                            <h1 className="text-black dark:text-white font-semibold text-xl font-montserrat leading-relaxed">There are lots of tools to choose from, and it’s hard to find the right ones. That’s why I created this list – so you save time by easily finding the best stuff out there.</h1>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


export default MainContent
