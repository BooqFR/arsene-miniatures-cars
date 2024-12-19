import { AppRouter, SignInPage } from '@pages'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { auth } from 'src/firebase/firebase'
import userAtom from 'src/store/atoms/user'

export default function RootPage() {
  // Store
  const [userAtomValue, setUserAtomValue] = useAtom(userAtom)

  // State
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Set User Atom onAuthStateChanged
  auth.onAuthStateChanged(user => {
    setIsLoading(false)
    if (user) {
      setUserAtomValue(user)
    } else {
      setUserAtomValue(undefined)
    }
  })

  // Handle Loading
  if (isLoading) {
    return null
  }

  // Handle Not Logged In
  if (!userAtomValue) {
    return <SignInPage />
  }

  return <RouterProvider router={AppRouter} />
}
