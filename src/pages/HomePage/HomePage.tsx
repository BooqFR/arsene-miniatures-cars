import { useAuth } from '@hooks'

export default function HomePage() {
  // Hooks
  const { useLogout } = useAuth()
  const { mutate: logout } = useLogout()

  return (
    <div>
      <p>HomePage</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
