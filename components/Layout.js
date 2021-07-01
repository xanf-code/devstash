import HeaderElement from "../components/HeaderElement";
import SidebarComponent from '../components/SidebarComponent'
import { Component } from 'react';
import themeStore from "../store/darkMode";
import { v4 as uuidv4 } from 'uuid';
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'

let userUUID = uuidv4();

const httpLink = createHttpLink({
    uri: 'https://snowy-morning-277.fly.dev/'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const uuidCheck = () => {
    const user = localStorage.getItem("uuid")
    if (user === null) {
        localStorage.setItem('uuid', userUUID);
        const id = localStorage.getItem('uuid')
        themeStore.setState({ uuid: id });
    } else {
        const id = localStorage.getItem('uuid');
        themeStore.setState({ uuid: id });
    }
}

const themeCheck = () => {
    const item = localStorage.getItem("theme");
    if (item === "true") {
        themeStore.setState({ dark: true })
    } else {
        themeStore.setState({ dark: false })
    }
}
export default class Layout extends Component {

    componentDidMount() {
        themeCheck()
        uuidCheck()
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <ChakraProvider>
                    <div className=" dark:bg-black bg-white">
                        <HeaderElement />
                        <SidebarComponent />
                        {this.props.children}
                    </div>
                </ChakraProvider>
            </ApolloProvider>
        )
    }
}