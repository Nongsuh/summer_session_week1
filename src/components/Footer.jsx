import React from 'react'
import home from '../assets/img/svg/Home 1.svg'
import search from '../assets/img/svg/Search 1.svg'
import transaction from '../assets/img/svg/transaction 1.svg'
import profile from '../assets/img/png/Profile 1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <button className="block">
        <img src={home} alt="" />
        <p>Home</p>
      </button>
      <button className="block">
        <img src={search} alt="" />
        <p>Product</p>
      </button>
      <button className="block">
        <img src={transaction} alt="" />
        <p>Transaction</p>
      </button>
      <button className="block">
        <img src={profile} alt="" />
        <p>Account</p>
      </button>
    </div>
  )
}

export default Footer
