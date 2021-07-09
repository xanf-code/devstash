import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '../components/Buttons/Button'

export default function MainContent() {

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/stashes')
    };

    return (
        <main>
            <div className="pt-[40%] lg:pt-[20%] m-auto">
                <h1 className=" text-blue-600 text-lg font-bold font-montserrat uppercase tracking-widest select-none">#devstash</h1>
                <h1 className="select-none tracking-tighter md:tracking-tight dark:text-white font-bold leading-none text-[50px] md:text-5xl xl:text-6xl font-montserrat mb-2"> A list of
                    coding resources for noobies and new devs <span>
                        <Image src="https://emojis.slackmojis.com/emojis/images/1600706728/10521/meow_code.gif?1600706728" alt="Picture of the author"
                            width={40}
                            height={40} />
                    </span></h1>
                <h1 className="select-none text-gray-600 dark:text-gray-400 font-semibold text-base md:text-xl font-montserrat leading-relaxed">There are lots of tools to choose from, and it’s hard to find the right ones. That’s why I created this list – so you save time by easily finding the best stuff out there.</h1>
                <div className="shadow-md m-auto mt-4 hover:-translate-y-0.5">
                    <Button clickhandler={handleClick} class="duration-200 hover:shadow-lg w-full bg-gradient-to-r from-[#b92b27] to-[#1565C0]  rounded-md lg:cursor-pointer" textClass="select-none p-2 text-white font-poppins font-semibold self-center" text="Get Started" />
                </div>
            </div>
        </main>
    )
}