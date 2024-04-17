import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './pages/Layout'
import Protected from './components/Protected'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Protected></Protected> // To be used to check if user is signed in */}
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
