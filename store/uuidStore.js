import create from 'zustand';

let uuidStore = set => ({
    uuid: '',
})

const useridStore = create(uuidStore)

export default useridStore;