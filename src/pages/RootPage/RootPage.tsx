import { auth } from '@firebase/firebase'
import { HomePage, SignInPage } from '@pages/index'
import userAtom from '@store/atoms/user'
import { useAtom } from 'jotai'
import { useState } from 'react'

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

  if (isLoading) {
    return null
  }

  return (
    <div className="App">
      <header className="App-header">{userAtomValue ? <HomePage /> : <SignInPage />}</header>
    </div>
  )
}
