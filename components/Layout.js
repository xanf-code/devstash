import HeaderElement from "../components/HeaderElement";
import SidebarComponent from '../components/SidebarComponent'

function Layout({ children }) {
    return (
        <div className=" dark:bg-black bg-white">
            <HeaderElement />
            {children}
            <div>
                <SidebarComponent />
            </div>
        </div>
    )
}

export default Layout
