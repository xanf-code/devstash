import create from 'zustand'

const setSearch = create(set => ({
    searchActive: false,
    showSearch: () => set(state => ({ searchActive: !state.searchActive })),
}))

export default setSearch