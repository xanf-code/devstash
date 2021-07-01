import SecondarySidebar from "./SecondarySidebar"
import PrimarySidebar from "./PrimarySidebar"
import SocialSidebar from "./SocialSidebar"

export default function SidebarComponent() {
    return (
        <div className="lg:pt-14 py-20 px-4 sidebar z-10 bg-gray-50 dark:bg-[#0A0806] w-[60%] md:w-[50%] lg:w-[24%] fixed inset-y-0 left-0 -translate-x-full transition duration-200 ease-in-out">
            <PrimarySidebar />
            <SecondarySidebar />
            <SocialSidebar />
        </div>
    )
}
