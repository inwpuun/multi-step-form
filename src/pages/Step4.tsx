import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SideBox from '../components/SideBox';
import './../../css/style.css'
import './../../css/step4.css'
import TopBox from '../components/TopBox';

type Props = {}

export default function Step4({}: Props) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
  function getCurrentDimension(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  const navigate = useNavigate();
  const location = useLocation();
  let type = location.state.type;
  let title = location.state.title;
  let addOns = location.state.addOns;

  function findPrice(type: string, title: string): string {
    let price = '';
    if (type == 'mo') {
      if (title == 'Arcade') {
        price = '9';
      } else if (title == 'Advanced') {
        price = '12';
      } else if (title == 'Pro') {
        price = '15';
      }
    } else if (type == 'yr') {
      if (title == 'Arcade') {
        price = '90';
      } else if (title == 'Advanced') {
        price = '120';
      } else if (title == 'Pro') {
        price = '150';
      }
    }
    return price;
  }

  function findAddOnsPrice(addOn: string): string {
    let price = '';
    if (type == 'mo') {
      if (addOn == 'Online service') {
        price = '1';
      } else if (addOn == 'Larger storage') {
        price = '2';
      } else if (addOn == 'Customizable profile') {
        price = '2';
      }
    } else if (type == 'yr') {
      if (addOn == 'Online service') {
        price = '10';
      } else if (addOn == 'Larger storage') {
        price = '20';
      } else if (addOn == 'Customizable profile') {
        price = '20';
      }
    }
    return price;
  }

  function generateAddOns(addOns: string[]): JSX.Element[] {
    let addOnsList: JSX.Element[] = [];
    for (let i = 0; i < addOns.length; i++) {
      if (addOns[i] == '') {
        continue;
      }
      addOnsList.push(
      <div className="addOn">
        <p>{addOns[i]}</p>
        <p id='price'>+${findAddOnsPrice(addOns[i])}/{type}</p>
      </div>);
    }
    return addOnsList;
  }

  function sumPrice(): string {
    let price = findPrice(type, title);
    let addOnsPrice = 0;
    for (let i = 0; i < addOns.length; i++) {
      if (addOns[i] == '') {
        continue;
      }
      addOnsPrice += parseInt(findAddOnsPrice(addOns[i]));
    }
    return (parseInt(price) + addOnsPrice).toString();
  }

  function toStep3(type: string, title: string) {
    navigate('/step3', {state: {
      type: type,
      title: title,
    }})
  }


  return (
    <div className='step4'>
      {screenSize.width < 1270 ? <TopBox step={4} /> : <></> }
      <div className='center'>
        {screenSize.width > 1270 ? <SideBox step={4} /> : <></> }
        <div className="mainStep4">
          <div className="toptxt">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </div>
          <div className="planChoice">
            <div className="headTitle">
              <div className="leftHead">
                <h1>{title} ({type == 'mo' ? 'Monthly' : 'Yearly'})</h1>
                <p>Change</p>
              </div>
              <div className="rightHead">
                <h2>${findPrice(type, title)}/{type}</h2>
              </div>
            </div>
            {addOns.length > 1 && <div id='line'></div>}
            <div className="addOns">
              {generateAddOns(addOns)}
            </div>
          </div>
          <div className="total">
            <p>Total (per {type == 'yr' ? 'year' : 'month'})</p>
            <h6>+${sumPrice()}/{type}</h6>
          </div>
          {screenSize.width > 1270 ? <div className="checkbox">
            <div className='butt0' onClick={() => toStep3(type, title)} >Go Back</div>
            <div className='butt' id='confirm' onClick={() => navigate('/step5')}>Confirm</div>
          </div> : <></>}
        </div>        
      </div>
      {screenSize.width < 1270 ? <div className='bgcb2'><div className="checkbox2">
            <div className='butt0' onClick={() => toStep3(type, title)} >Go Back</div>
            <div className='butt' id='confirm' onClick={() => navigate('/step5')}>Confirm</div>
          </div></div> : <></>}
    </div>
  )
}