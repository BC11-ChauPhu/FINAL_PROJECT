import './App.css'
import useCustomRoutes from './routes/useCustomRoutes';

function App() {
  const myRoutes = useCustomRoutes()
  return myRoutes
}

export default App
