import { auth } from '@firebase/firebase'
import { useMutation } from '@tanstack/react-query'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default function useAuth() {
  const useLogin = () =>
    useMutation({
      mutationKey: ['login'],
      mutationFn: async ({ email, password }: { email: string; password: string }) =>
        signInWithEmailAndPassword(auth, email, password)
    })

  const useLogout = () =>
    useMutation({
      mutationKey: ['logout'],
      mutationFn: () => signOut(auth)
    })

  return {
    useLogin,
    useLogout
  }
}
