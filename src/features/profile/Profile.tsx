import React from 'react'

import { useAppDispatch } from '../../app/store'

import s from './Profile.module.scss'

export const Profile = () => {
  const dispatch = useAppDispatch

  const onClickHandler = () => {
    // dispatch()
  }

  return (
    <div className={s.profile}>
      <div className={s.containerPR}>
        <h3>Personal Information</h3>
        <div className={s.info}>
          <div className={s.avatar}>
            <p>Avatar</p>
          </div>
          <div className={s.info_data}>
            <h3>Name</h3>
            <div>
              <p onClick={onClickHandler}>Status</p>
              <img src="" alt="" />
              {/*<SuperInputText/>*/}
            </div>
            <a href="#">email</a>
            <button>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}
