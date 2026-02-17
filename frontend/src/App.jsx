import './App.css'
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';

//import pages
import SignIn from './pages/loginPages/signIn.jsx';
import ForgetPassword from './pages/loginPages/ForgetPassword.jsx';
import VerifyCode from './pages/loginPages/VerifyCode.jsx';
import ResetPassword from './pages/loginPages/ResetPassword.jsx';
import Header from './layouts/Header.jsx';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className='dark:bg-linear-to-b from-blue-950 to-gray-900 bg-gray-100  min-h-screen'>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/verify-code' element={<VerifyCode />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/home' element={<Header />} />


        </Routes>
      </div>
    </>
  )
}

export default App;
