import React, { ChangeEvent, useEffect, useState } from 'react'
import SideBox from '../components/SideBox'
import { useNavigate } from 'react-router-dom';
import './../../css/style.css'
import './../../css/step1.css'
import TopBox from '../components/TopBox';

type Props = {}

export default function Step1({}: Props) {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("NAME")
    if (savedName) {
      return JSON.parse(savedName)
    } else {
      return ''
    }
  })
  const [mail, setMail] = useState(() => {
    const savedMail = localStorage.getItem("MAIL")
    if (savedMail) {
      return JSON.parse(savedMail)
    } else {
      return ''
    }
  })
  const [phone, setPhone] = useState(() => {
    const savedPhone = localStorage.getItem("PHONE")
    if (savedPhone) {
      return JSON.parse(savedPhone)
    } else {
      return ''
    }
  })

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
          }
      }

  useEffect(() => {
    localStorage.setItem("NAME", JSON.stringify(name))
    localStorage.setItem("MAIL", JSON.stringify(mail))
    localStorage.setItem("PHONE", JSON.stringify(phone))
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [name, mail, phone, screenSize])

  const [errorName, setErrorName] = useState('')
  const [errorMail, setErrorMail] = useState('')
  const [errorPhone, setErrorPhone] = useState('')

  const [nameStyle, setNameStyle] = useState({})
  const [mailStyle, setMailStyle] = useState({})
  const [phoneStyle, setPhoneStyle] = useState({})

  const alertStyle: React.CSSProperties = {
    border: '1px solid #ED3548'
  }

  const navigate = useNavigate();
 
  // const handleGoBack = () => {
  //   navigate(-1); // new line
  // };

  useEffect(() => {
    console.log({ name, mail, phone })
  }, [name, mail, phone])

  function checkName(v: string): boolean {
    return v != ''
  }

  function checkMail(v: string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
  }

  function checkPhone(v: string): boolean {
    return /^\d{10}$/.test(v)
  }

  function handleNextStep() {
    if (checkName(name) && checkMail(mail) && checkPhone(phone)) {
      navigate('/step2')
    } else {
      setErrorName(checkName(name) ? '': 'This field is required')
      setErrorMail(checkMail(mail) ? '': 'This field is required')
      setErrorPhone(checkPhone(phone) ? '': 'This field is required')
      setNameStyle(checkName(name) ? {} : alertStyle)
      setMailStyle(checkMail(mail) ? {} : alertStyle)
      setPhoneStyle(checkPhone(phone) ? {} : alertStyle)
    }
  }

  return (
    <div className='step1'>
    {screenSize.width < 1270 ?  <TopBox step={1} /> : <></>}
    <div className='center'>
      {screenSize.width > 1270 ?  <SideBox step={1} /> : <></>}
      <div className="mainStep1">
        <div className="toptxt">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form>
          <div className="name">
            <div className="top">
              <p>Name</p>
              <p id='error'>{errorName}</p>
            </div>
            <input type="text" style={nameStyle} placeholder="e.g. Stephen King" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          </div>
          <div className="email">
            <div className="top">
              <p>Email Address</p>
              <p id='error'>{errorMail}</p>
            </div>
            <input type="email" style={mailStyle} placeholder="e.g. stephenking@lorem.com" value={mail} onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)} />
          </div>
          <div className="phone">
            <div className="top">
              <p>Phone Number</p>
              <p id='error'>{errorPhone}</p>
            </div>
            <input type="text" style={phoneStyle} placeholder="e.g. +1 234 567 890" value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
          </div>
        </form>
        {screenSize.width >= 1270 ? <div className="checkbox">
          <div className='butt' onClick={() => handleNextStep()}>Next Step</div>
        </div> : <></>}
      </div>
    </div>
    
    {screenSize.width < 1270 ? <div className='bgcb2'><div className="checkbox2">
      <div className='butt' onClick={() => handleNextStep()}>Next Step</div>
    </div></div> : <></>}
    </div>
  )
}