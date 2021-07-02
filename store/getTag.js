import create from 'zustand';
import { devtools } from 'zustand/middleware';

let grabTag = set => ({
    initial: "",
    tagClick: (tag) => set({
        initial: tag,
    }),
    clear: () => set({
        initial: ""
    }),
    initialpage: 1,
    incrementPage: () => set(state => ({ initialpage: state.initialpage + 1 })),
})

grabTag = devtools(grabTag)

const getTag = create(grabTag)

export default getTag;