import { useState } from 'react'
import { useAuth } from '../../hooks'

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
    <div>
      <input
        type="email"
        value={email}
        className="bg-red-100"
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        className="bg-red-100"
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {isError && <p>Une erreur est survenue.</p>}
    </div>
  )
}
