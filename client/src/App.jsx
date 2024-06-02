import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbaar from './Components/Navbaar/Navbaar'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbaar />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
