import React, { ChangeEvent, useEffect, useState } from 'react'
import SideBox from '../components/SideBox'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './../../css/style.css'
import './../../css/step2.css'
import PlanBox from '../components/PlanBox'
import { set } from 'firebase/database'

type Props = {}

export default function Step2m({}: Props) {
  const [check, setCheck] = useState(false)
  const [plan, setPlan] = useState('')
  const [press, setPress] = useState(false)
  
  const navigate = useNavigate();

  let style: React.CSSProperties = {
    color: '#02295A',
    transition: 'all 0.5s ease-in-out'
  }

  useEffect(() => {
    console.log({ check, plan })
  }, [check, plan])

  function toStep3(type: string) {
    navigate('/step3', {state: {
      type: type,
      title: plan,
    }})
  }

  function alert(plan: string): boolean {
    return plan == ''
  }

  function handleNextStep() {
    if (plan != '') {
      toStep3(check ? 'yr' : 'mo')
    } else {
      setPress(alert(plan))
    }
  }

  function changePlan(p: string) {
    setPlan(p)
  }

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
            <PlanBox title="Arcade" price={check ? "90" : "9"} type={check ? 'yr' : 'mo'} isAlert={press} changePlan={changePlan} />
            <PlanBox title="Advanced" price={check ? "120" : "12"} type={check ? 'yr' : 'mo'} isAlert={press} changePlan={changePlan} />
            <PlanBox title="Pro" price={check ? "150" : "15"} type={check ? 'yr' : 'mo'} isAlert={press} changePlan={changePlan} />
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
            <div className='butt' onClick={() => handleNextStep()}>Next Step</div>
          </div>
        </div>
      </div>
    </>
  )
}