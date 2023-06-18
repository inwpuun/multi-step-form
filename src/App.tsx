// import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';

type Props = {}

export default function App({}: Props) {
  return (
    <Routes>
      <Route path="/" Component={Step1} />
      <Route path="/step2" Component={Step2} />
      <Route path="/step3" Component={Step3} />
      <Route path="/step4" Component={Step4} />
      <Route path="/step5" Component={Step5} />
    </Routes>
  )
}