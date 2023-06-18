import React, { ChangeEvent, useEffect, useState } from 'react'
import SideBox from '../components/SideBox'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './../../css/style.css'
import './../../css/step3.css'
import PickAddOns from '../components/PickAddOns'

type Props = {}

export default function Step3m({}: Props) {
  const [addOns, setAddOns] = useState([''])

  useEffect(() => {
    console.log({ addOns })
  }, [addOns])


  const navigate = useNavigate();
  const location = useLocation();
  let type = location.state.type;
  let title = location.state.title;

  function addAddOns(addOn: string) {
    setAddOns(addOns => [...addOns, addOn])
  }

  function delAddOns(addOn: string) {
    setAddOns(addOns => addOns.filter(a => a != addOn))
  }

  function toStep4(type: string, title: string, addOns: string[]) {
    navigate('/step4', {state: {
      type: type,
      title: title,
      addOns: addOns,
    }})
  }

  return (
    <>
      <div className='center'>
        <SideBox step={3} />
        <div className="mainStep3">
          <div className="toptxt">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className="addOns">
            <PickAddOns title="Online service" desc="Access to multiplayer games" price={type == 'mo' ? '1' : '10'} type={type} addAddOns={addAddOns} delAddOns={delAddOns} />
            <PickAddOns title="Larger storage" desc="Extra 1TB of cloud save" price={type == 'mo' ? '2' : '20'} type={type} addAddOns={addAddOns} delAddOns={delAddOns} />
            <PickAddOns title="Customizable profile" desc="Custom theme on your profile" price={type == 'mo' ? '2' : '20'} type={type} addAddOns={addAddOns} delAddOns={delAddOns} />
          </div>
          <div className="checkbox">
            <Link to='/step2' className='butt0' >Go Back</Link>
            <div className='butt' onClick={() => toStep4(type, title, addOns)}>Next Step</div>
          </div>
        </div>
      </div>
    </>
  )
}