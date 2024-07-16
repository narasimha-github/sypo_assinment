import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn'
import LogIn from './components/LogIn'
import DashBoard from './components/DashBoard'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/logIn" element={<LogIn />} />
      <Route exact path="/dash" element={<DashBoard />} />
    </Routes>
  </BrowserRouter>
)

export default App
