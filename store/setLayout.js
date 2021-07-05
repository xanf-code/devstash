import create from 'zustand'

const setLayout = create(set => ({
    compact: false,
    changeLayout: () => set(state => ({ compact: !state.compact })),
}))

export default setLayout