import create from 'zustand';
import { devtools } from 'zustand/middleware';

let theme = set => ({
    uuid: '',
    dark: false,
    toggleTheme: () => set(state => ({
        dark: !state.dark
    })),
})

theme = devtools(theme)
theme = devtools(theme)

const themeStore = create(theme)

export default themeStore;