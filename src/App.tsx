// import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Step1 from './pages/Step1';
import Step2m from './pages/Step2m';
import Step2y from './pages/Step2y';
import Step3m from './pages/Step3m';
import Step3y from './pages/Step3y';
import Step4m from './pages/Step4m';
import Step4y from './pages/Step4y';
import Step5 from './pages/Step5';

type Props = {}

export default function App({}: Props) {
  return (
    <Routes>
      <Route path="/" Component={Step1} />
      <Route path="/step2m" Component={Step2m} />
      <Route path="/step2y" Component={Step2y} />
      <Route path="/step3m" Component={Step3m} />
      <Route path="/step3y" Component={Step3y} />
      <Route path="/step4m" Component={Step4m} />
      <Route path="/step4y" Component={Step4y} />
      <Route path="/step5" Component={Step5} />
    </Routes>
  )
}