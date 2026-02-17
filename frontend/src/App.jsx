import './App.css'
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';

//import pages
import SignIn from './pages/loginPages/signIn.jsx';
import ForgetPassword from './pages/loginPages/ForgetPassword.jsx';
import VerifyCode from './pages/loginPages/VerifyCode.jsx';
import ResetPassword from './pages/loginPages/ResetPassword.jsx';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/verify-code' element={<VerifyCode />} />
          <Route path='/reset-password' element={<ResetPassword />} />


        </Routes>
      </div>
    </>
  )
}

export default App;
