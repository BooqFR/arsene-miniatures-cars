import { Button, Input } from '@components'
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useAuth } from '@hooks'
import { useState } from 'react'

export default function SignInPage() {
  // States
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // Hooks
  const { useLogin } = useAuth()
  const { mutate: login, isError } = useLogin()

  // Handle Login
  const handleLogin = () => {
    if (!!email && !!password) {
      login({ email: email, password: password })
    }
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col gap-2 items-center max-w-[600px] w-full">
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          label="Email"
          icon={<UserCircleIcon />}
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          label="Password"
          icon={<LockClosedIcon />}
        />
        <Button text="Login" onPress={handleLogin} fullWidth size="lg" className="mt-4" />
        {isError && <p>Une erreur est survenue.</p>}
      </div>
    </div>
  )
}
