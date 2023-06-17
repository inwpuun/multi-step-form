import React from 'react'
import './../../css/plan-box.css'
import advanced from '/images/icon-advanced.svg'
import arcade from '/images/icon-arcade.svg'
import pro from '/images/icon-pro.svg'

type Props = {title: string, price: string, type: string}

export default function PlanBox({title, price, type}: Props) {
    let img = arcade;
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
        <div className="planBox">
            <img src={img} alt="logo" />
            <div className="txt">
                <h5>{title}</h5>
                <p>${price}/{type}</p>
                {type=='yr' && <p id='mf'>2 months free</p>}
            </div>
        </div>
    )
}