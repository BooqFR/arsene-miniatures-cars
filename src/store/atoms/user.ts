import { User } from 'firebase/auth'
import { atom } from 'jotai'

const userAtom = atom<User | undefined>()

export default userAtom
