import create from 'zustand';
import { devtools } from 'zustand/middleware';

let mobileNav = (set) => ({

    toggleNav: () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle("-translate-x-full")
    }
})

mobileNav = devtools(mobileNav)

const navStore = create(mobileNav)

export default navStore;