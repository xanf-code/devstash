import { providers, signIn, getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Icons from '../components/SVGComponent/Icons'
export default function SignIn({ providers }) {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.replace('/')
    }

    return (
        <div className='bg-app-bg bg-no-repeat flex items-center justify-center w-full h-screen'>
            <div className="z-0">
                <div className='m-0 flex flex-col'>
                    <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-xl">
                        {Object.values(providers).map((provider) => {
                            console.log(provider);
                            return (
                                <div key={provider.name}>
                                    <div onClick={() => signIn(provider.id)} className="bg-purple-900 m-4 cursor-pointer rounded-md shadow-sm hover:shadow-xl duration-300">
                                        <div className="flex p-3">
                                            <Icons name={`${provider.name === 'GitHub' ? 'github' : 'twitter'}`} />
                                            <h1 className="ml-3 font-poppins font-semibold text-white">
                                                Sign in with {provider.name}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="cursor-pointer mt-4" onClick={handleClick}>
                    <h1 className="text-white font-poppins font-normal hover:text-blue-500 duration-200">👈 Go Back</h1>
                </div>
            </div>
        </div>
    )
}

SignIn.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }
    return {
        session: undefined,
        providers: await providers(context),
    }
}