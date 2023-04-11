import * as React from 'react'

import { Routes, Route } from 'react-router-dom'

import { NewPassword } from '../enteringNewPassword/EnteringNewPassword'
import { ErrorComponent } from '../Error/404Error'
import { Login } from '../login/Login'
import { Navigate } from '../navigate/Navigate'
import { PasswordRecovery } from '../passwordRecovery/PasswordRecovery'
import { Profile } from '../profile/Profile'
import { Registration } from '../registration/Registration'

export default function App() {
  return (
    <div>
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
