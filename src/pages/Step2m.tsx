import React, { ChangeEvent, useEffect, useState } from 'react'
import SideBox from '../components/SideBox'
import { Link } from 'react-router-dom'
import './../../css/style.css'
import './../../css/step2.css'
import PlanBox from '../components/PlanBox'

type Props = {}

export default function Step2m({}: Props) {
  const [check, setCheck] = useState(false)

  let style: React.CSSProperties = {
    color: '#02295A',
    transition: 'all 0.5s ease-in-out'
  }

  useEffect(() => {
    console.log({ check })
  }, [check])

  return (
    <>
      <div className='center'>
      <SideBox step={2} />
      <div className="mainStep2">
        <div className="toptxt">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="planChoice">
          <PlanBox title="Arcade" price="9" type={check ? 'yr' : 'mo'} />
          <PlanBox title="Advanced" price="12" type={check ? 'yr' : 'mo'} />
          <PlanBox title="Pro" price="15" type={check ? 'yr' : 'mo'} />
        </div>
        <div className="togglemy">
          <p style={check ? {} : style}>Monthly</p>
          <label className="switch">
            <input type="checkbox" onChange={(e: ChangeEvent<HTMLInputElement>) => setCheck(e.currentTarget.checked)} />
            <span className="slider_round"></span>
          </label>
          <p style={check ? style : {}}>Yearly</p>
        </div>
        <div className="checkbox">
          <Link to="/" className='butt0'>Go Back</Link>
          <Link to={check ? "/step3y" : "/step3m"} className='butt'>Next Step</Link>
        </div>
      </div>
    </div>
    </>
  )
}