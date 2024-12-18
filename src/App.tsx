import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import { auth } from './firebase'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {auth.currentUser ? <Logout /> : <Login />}
      </header>
    </div>
  )
}

export default App
