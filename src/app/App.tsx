import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { NewPassword } from '../features/enteringNewPassword/EnteringNewPassword'
import { ErrorComponent } from '../features/Error/404Error'
import Header from '../features/header/Header'
import { Login } from '../features/login/Login'
import { Navigate } from '../features/navigate/Navigate'
import { PasswordRecovery } from '../features/passwordRecovery/PasswordRecovery'
import { Profile } from '../features/profile/Profile'
import { Registration } from '../features/registration/Registration'

export default function App() {
  return (
    <div>
      <Header />
      <Navigate />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/password_recovery" element={<PasswordRecovery />} />
        <Route path="/entering_new_password" element={<NewPassword />} />
        <Route path="/*" element={<ErrorComponent />} />
      </Routes>
    </div>
  )
}
