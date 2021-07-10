import { providers, signIn, getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import themeStore from "../store/darkMode";

export default function SignIn({ providers }) {

    const dark = themeStore(state => state.dark)
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.replace('/')
    }

    return (
        <div className={`${dark ? 'bg-black' : 'bg-white'} min-h-screen`}>
            <h1>SignIn</h1>
            {Object.values(providers).map((provider) => {
                return (
                    <div key={provider.name}>
                        <div onClick={() => signIn(provider.id)} className="bg-blue-500 m-4 cursor-pointer">
                            <h1 className="p-4">
                                Sign in with {provider.name}
                            </h1>
                        </div>
                    </div>
                )
            })}
            <div onClick={handleClick}>
                <h1 className="text-white">go back</h1>
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