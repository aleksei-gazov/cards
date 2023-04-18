import React, { useEffect } from 'react'

import IconButton from '../../assets/image/imageProfile/logout.svg'
import SuperButton from '../../comman/components/c2-SuperButton/SuperButton'

import { getProfile } from './profile-slice'
import s from './Profile.module.scss'

import { useAppDispatch } from 'app/store'
import SuperEditableSpan from 'comman/components/c4-SuperEditableSpan/SuperEditableSpan'

export const Profile = () => {
  const dispatch = useAppDispatch()

  const changeStatus = () => {
    // dispatch()
  }

  const logOutHandler = () => {
    // dispatch() logout
    // dispatch() islogin true
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <div className={s.profile}>
      <div className={s.containerPR}>
        <h3>Personal Information</h3>
        <div className={s.info}>
          <div className={s.avatar}>
            <p>Avatar</p>
          </div>
          <div className={s.info_data}>
            <SuperEditableSpan value={'name'} />
            <a href="#">email</a>
            <SuperButton
              onClick={logOutHandler}
              style={{
                background: '#FCFCFC',
                boxShadow:
                  '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                borderRadius: '30px',
                width: '127px',
                height: '36px',
                padding: '17px 0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#000000',
              }}
            >
              <img src={IconButton} alt={'btn'} />
              Log Out
            </SuperButton>
            {/*<button>Log Out</button>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
