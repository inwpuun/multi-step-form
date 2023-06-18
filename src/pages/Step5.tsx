import { useEffect, useState } from 'react'
import SideBox from '../components/SideBox'
import thank from '/images/icon-thank-you.svg'
import './../../css/style.css'
import './../../css/step5.css'
import TopBox from '../components/TopBox'

type Props = {}

export default function Step5({}: Props) {
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

  return (
    <div className='step5'>
      {screenSize.width < 1270 ? <TopBox step={4} /> : <></> }
      <div className='center'>
        {screenSize.width > 1270 ? <SideBox step={4} /> : <></> }
        <div className="mainStep5">
          <img src={thank} alt="thank" />
          <h1>Thank you!</h1>
          <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgamin.com</p>
        </div>
      </div>
    </div>
  )
}