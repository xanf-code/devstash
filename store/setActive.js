import create from 'zustand'

const setActiveStore = create(set => ({
    active: false,
}))

export default setActiveStore