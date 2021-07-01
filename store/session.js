import create from 'zustand';
import { devtools } from 'zustand/middleware';

let grabSession = () => ({
    sessionID: null
})

grabSession = devtools(grabSession)

const sessionData = create(grabSession)

export default sessionData;