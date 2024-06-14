import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'
import Navbaar from './Components/Navbaar/Navbaar'
import AllRoutes from './AllRoutes'
import { useEffect } from 'react'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

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
