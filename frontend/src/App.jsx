import './App.css'
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';

//import pages
import SignIn from './pages/loginPages/signIn.jsx';
import ForgetPassword from './pages/loginPages/ForgetPassword.jsx';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forget-password' element={<ForgetPassword />} />


        </Routes>
      </div>
    </>
  )
}

export default App;
