import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
      <div className="title">
        Movie Apps
      </div>
      <div className="image">
        <img src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg" alt="" />
      </div>
    </div>
  )
}
