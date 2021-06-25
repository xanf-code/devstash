import Image from 'next/image'

function MainContent() {
    return (
        <main>
            <section className="pt-24 min-h-screen lg:min-h-0">
                <h1 className=" text-blue-600 text-lg font-bold font-montserrat uppercase tracking-widest">#devstash</h1>
                <h1 className=" tracking-tighter md:tracking-tight dark:text-white font-bold text-4xl md:text-5xl xl:text-6xl font-montserrat ">A list of
                    coding resources for noobies and new devs <span>
                        <Image src="https://emojis.slackmojis.com/emojis/images/1600706728/10521/meow_code.gif?1600706728" alt="Picture of the author"
                            width={40}
                            height={40} />
                    </span></h1>
                <h1 className=" text-gray-600 dark:text-gray-400 font-semibold text-base md:text-xl font-montserrat leading-relaxed">There are lots of tools to choose from, and it’s hard to find the right ones. That’s why I created this list – so you save time by easily finding the best stuff out there.</h1>
            </section>
        </main>
    )
}

export default MainContent
