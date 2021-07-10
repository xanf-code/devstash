import create from 'zustand';

let theme = (set, get) => ({
    dark: false,
    toggleDark: () => {
        set(state => ({ dark: !state.dark }))
        const darkupdated = get().dark
        if (darkupdated) {
            localStorage.setItem("theme", darkupdated);
        } else {
            localStorage.setItem("theme", darkupdated);
        }
    }
})

const themeStore = create(theme)

export default themeStore;