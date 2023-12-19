import React from 'react'
import '../App.css';
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <div className='header'>
      <HeaderLeft />
      <HeaderRight />
    </div>
  )
}

export default Header