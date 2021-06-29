import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button } from "@chakra-ui/react"

function MainContent() {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/stashes')
    };

    return (
        <main>
            <section className="md:pt-[40%] lg:pt-[20%] min-h-screen m-auto">
                <h1 className=" text-blue-600 text-lg font-bold font-montserrat uppercase tracking-widest">#devstash</h1>
                <h1 className=" tracking-tighter md:tracking-tight dark:text-white font-bold leading-none text-[50px] md:text-5xl xl:text-6xl font-montserrat mb-2"> A list of
                    coding resources for noobies and new devs <span>
                        <Image src="https://emojis.slackmojis.com/emojis/images/1600706728/10521/meow_code.gif?1600706728" alt="Picture of the author"
                            width={40}
                            height={40} />
                    </span></h1>
                <h1 className=" text-gray-600 dark:text-gray-400 font-semibold text-base md:text-xl font-montserrat leading-relaxed">There are lots of tools to choose from, and it’s hard to find the right ones. That’s why I created this list – so you save time by easily finding the best stuff out there.</h1>
                <div className="shadow-md m-auto mt-4 hover:-translate-y-0.5">
                    <Button _hover={{ bg: 'transparent' }} onClick={handleClick} isFullWidth={true} colorScheme="teal" variant="outline">
                        <h1 className="text-black dark:text-white font-poppins font-semibold">
                            Get Started
                        </h1>
                    </Button>
                </div>
            </section>
        </main>
    )
}

export default MainContent