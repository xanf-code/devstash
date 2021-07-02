import create from 'zustand'

const useStore = create(set => ({
    initialPage: 2,
    increment: () => set(state => ({ initialPage: state.initialPage + 1 })),
    setInitital: () => set({ initialPage: 2 }),
}))

export default useStore