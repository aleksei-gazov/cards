import React from 'react'

import s from './Header.module.scss'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}></div>
      <div className={s.info}>
        <div className={s.info_data}>
          <h5>Name</h5>
          <p>Status</p>
        </div>
        <div className={s.avatar}>Avatar</div>
      </div>
    </div>
  )
}

export default Header
