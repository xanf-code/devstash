import create from 'zustand'

const setTextStore = create(set => ({
    maintext: '',
}))

export default setTextStore