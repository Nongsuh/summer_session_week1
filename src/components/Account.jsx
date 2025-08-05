import React from 'react'
import profile from '../assets/img/png/profile.png'
import contact from '../assets/img/svg/contact.svg'
import funding from '../assets/img/svg/funding.svg'
import bank from '../assets/img/png/bank.png'
import document from '../assets/img/svg/doc.svg'
import setting from '../assets/img/svg/setting.svg'
import vector from '../assets/img/png/vector.png'

const Account = () => {
  return (
    <div className='account_page'>
      <h1>Profile</h1>
      <div className="top">
        <img src={profile} alt=''/>
        <p className='name'>Jonas Macroni</p>
        <p className='job'>Expert</p>
      </div>
      <div className="button_wrap">
        <button>
            <img id='icon' src={contact} alt="" />
            <p>Contact Info</p>
            <img id='vector' src={vector} alt="" />
        </button>
        <button>
            <img id='icon' src={funding} alt="" />
            <p>Source of Funding Info</p>
            <img id='vector' src={vector} alt="" />
        </button>
        <button>
            <img id='icon' src={bank} alt="" />
            <p>Bank Account Info</p>
            <img id='vector' src={vector} alt="" />
        </button>
        <button>
            <img id='icon' src={document} alt="" />
            <p>Document Info</p>
            <img id='vector' src={vector} alt="" />
        </button>
         <button>
            <img id='icon' src={setting} alt="" />
            <p>Settings</p>
            <img id='vector' src={vector} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Account
