// import React from 'react'
import Step from './Step'
import './../../css/side-box.css'

type Props = {step: number}

export default function SideBox({step}: Props) {
  return (
    <div className="side-box">
        <Step step={1} desc="YOUR INFO" nowStep={step} />
        <Step step={2} desc="SELECT PLAN" nowStep={step} />
        <Step step={3} desc="ADD-ONS" nowStep={step} />
        <Step step={4} desc="SUMMARY" nowStep={step} />

    </div>
  )
}