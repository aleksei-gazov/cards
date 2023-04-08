import  React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Profile } from '../features/profile/Profile';
import {Login} from '../features/login/Login';
import { Registration } from '../features/registration/Registration';
import { PasswordRecovery } from '../features/passwordRecovery/PasswordRecovery';
import { NewPassword } from '../features/enteringNewPassword/EnteringNewPassword';
import { ErrorComponent } from '../features/Error/404Error';
import {Navigate} from '../features/navigate/Navigate';


export default function App() {
  return (
      <div>
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
