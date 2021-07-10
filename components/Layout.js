import HeaderElement from "../components/HeaderElement";
import SidebarComponent from '../components/SidebarComponent'
import { useEffect } from 'react';
import themeStore from "../store/darkMode";
import useridStore from "../store/uuidStore";
import { v4 as uuidv4 } from 'uuid';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'

function Layout({ children }) {

    const userUUID = uuidv4();

    const themeCheck = () => {
        const item = localStorage.getItem("theme");
        if (item === "true") {
            themeStore.setState({ dark: true })
        } else {
            themeStore.setState({ dark: false })
        }
    }

    useEffect(() => {
        themeCheck();
        const user = localStorage.getItem("uuid")
        if (user === null) {
            localStorage.setItem('uuid', userUUID);
            const id = localStorage.getItem('uuid')
            useridStore.setState({ uuid: id });
        } else {
            const id = localStorage.getItem('uuid');
            useridStore.setState({ uuid: id });
        }
    }, [userUUID])


    const httpLink = createHttpLink({
        uri: 'https://snowy-morning-277.fly.dev/'
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            <div className="dark:bg-black bg-white duration-200">
                {typeof window !== "undefined" && window.location.pathname === '/signin' ? <></> : <HeaderElement />}
                <SidebarComponent />
                {children}
            </div>
        </ApolloProvider>
    )
}

export default Layout
