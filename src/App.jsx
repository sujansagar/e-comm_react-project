
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<ProtectedRoute element={<Success />} />} />
      <Route path='/*' element={<Error />} />

    </Routes>
    </BrowserRouter>

    <ToastContainer />
      
    </>
  )
}

export default App
