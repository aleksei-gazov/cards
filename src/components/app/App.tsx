import * as React from 'react';
import './style.css';
import {Routes, Route} from 'react-router-dom'
import {Navigate} from '../navigate/Navigate';
import {Profile} from '../profile/Profile';
import {Login} from '../login/Login';
import {Registration} from '../registration/Registration';
import {PasswordRecovery} from '../passwordRecovery/PasswordRecovery';
import {NewPassword} from '../enteringNewPassword/EnteringNewPassword';
import {ErrorComponent} from '../Error/404Error';


export default function App() {
  return (
      <div>lllll
        <Navigate/>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/password_recovery' element={<PasswordRecovery/>}/>
          <Route path='/entering_new_password' element={<NewPassword/>}/>
          <Route path='/*' element={<ErrorComponent/>}/>
        </Routes>

      </div>
  );
}
