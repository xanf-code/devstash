import create from 'zustand';
import { devtools } from 'zustand/middleware';

let mobileNav = (set) => ({
    activeElement: 0,
    toggleNav: () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle("-translate-x-full")
    },
    activeNav: (active) => {
        set({ activeElement: active })
    }
})

mobileNav = devtools(mobileNav)

const navStore = create(mobileNav)

export default navStore;