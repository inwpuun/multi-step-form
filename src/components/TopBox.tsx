// import React from 'react'
import './../../css/side-box.css'

type Props = {step: number}

export default function TopBox({step}: Props) {
    const style = {
        background: "#BFE2FD",
        color: "black",
        border: "none",
    }
    return (
        <div className="top-box">
            <div className="stepCircle" style={step == 1 ? style: {}}>
                    <p>{1}</p>
            </div>
            <div className="stepCircle" style={step == 2 ? style: {}}>
                    <p>{2}</p>
            </div>
            <div className="stepCircle" style={step == 3 ? style: {}}>
                    <p>{3}</p>
            </div>
            <div className="stepCircle" style={step == 4 ? style: {}}>
                    <p>{4}</p>
            </div>
        </div>
    )
}