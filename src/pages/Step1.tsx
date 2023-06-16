// import React from 'react'
import SideBox from '../components/SideBox'
import './../../css/style.css'
import './../../css/step1.css'

type Props = {}

export default function Step1({}: Props) {
  return (
    <div className='center'>
      <SideBox step={1} />
      <div className="mainStep1">
        <div className="toptxt">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form>
          <div className="name">
            <div className="top">
              <p>Name</p>
              <p id='error'>This field is required</p>
            </div>
            <input type="text" placeholder="e.g. Stephen King" required aria-errormessage='This field is required' />
          </div>
          <div className="email">
            <p>Email Address</p>
            <input type="email" placeholder="e.g. stephenking@lorem.com" required />
          </div>
          <div className="phone">
            <p>Phone Number</p>
            <input type="text" placeholder="e.g. +1 234 567 890" required />
          </div>
          <div className="checkbox">
            <input type="submit" value="Next Step" />
          </div>
        </form>
      </div>
    </div>
  )
}