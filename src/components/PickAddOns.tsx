import { ChangeEvent } from 'react'
import './../../css/add-ons.css'

type Props = {title: string, desc: string, price: string, type: string, addAddOns: (addOn: string) => void, delAddOns: (addOn: string) => void}

export default function PickAddOns({title, desc, price, type, addAddOns, delAddOns}: Props) {
  return (
    <label className='container_add_ons'>
      <input type="checkbox" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          addAddOns(title)
        } else {
          delAddOns(title)
        }
      }} />
      <span className="detail">
        <span className="checkmark" />
        <div className="midTxt">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div className="rightTxt">
          <h2>+${price}/{type}</h2>
        </div>
      </span>
    </label>
  )
}