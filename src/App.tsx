import { AuthProvider } from "./context/authContext.tsx"
import Router from "./router/Router.tsx"

const App = () => {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}

export default App
