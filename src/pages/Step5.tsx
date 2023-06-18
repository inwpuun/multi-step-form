import React from 'react'
import SideBox from '../components/SideBox'
import thank from '/images/icon-thank-you.svg'
import './../../css/style.css'
import './../../css/step5.css'

type Props = {}

export default function Step5({}: Props) {
  return (
    <div className='center'>
      <SideBox step={4} />
      <div className="mainStep5">
        <img src={thank} alt="thank" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgamin.com</p>
      </div>
    </div>
  )
}