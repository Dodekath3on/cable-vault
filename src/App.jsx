import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './pages/public/Layout'
import Protected from './components/Protected'
import Home from './pages/public/Home'
import SignIn from './pages/public/SignIn'
import SignUp from './pages/public/SignUp'
import Dashboard from './pages/protected/Dashboard'
import Feedback from './pages/protected/Feedback'
import FAQ from './pages/public/FAQ'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/feedback' element={<Feedback />} />
          {/* <Protected></Protected> // To be used to check if user is signed in */}
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
