import { ChangeEvent, useEffect, useState } from 'react'

import './../../css/plan-box.css'
import advanced from '/images/icon-advanced.svg'
import arcade from '/images/icon-arcade.svg'
import pro from '/images/icon-pro.svg'

type Props = {title: string, price: string, type: string, isAlert: boolean, changePlan: (p: string) => void}


export default function PlanBox({title, price, type, isAlert, changePlan}: Props) {
    let img = arcade;
        
    const style: React.CSSProperties = {
        animation: 'shake 0.5s',
        transition: 'all 0.5s ease-in-out'
    }
    
    switch (title) {    
        case "Arcade": 
            img = arcade;
            break;
        case "Advanced":
            img = advanced;
            break;
        case "Pro":
            img = pro;
            break;
    }

    return (
        <label className='container'>
            <input type="radio" name="plan" value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => changePlan(e.target.value)}/>
            <span className='planBox' style={isAlert ? style : {}}>
                <img src={img} alt="logo" />
                <div className="txt">
                    <h5>{title}</h5>
                    <p>${price}/{type}</p>
                    {type=='yr' && <p id='mf'>2 months free</p>}
                </div>
            </span>
        </label>
    )
}