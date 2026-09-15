import React from 'react'
// import { PropDrilling } from './components/PropDrilling'
import { BioProvider } from './components/hooks/ContextAPI'
import { Home } from './components/hooks/ContextAPI/Home'
import { About } from './components/hooks/ContextAPI/About'
// import Accordian from './components/Accordian'


function App() {
  return (
    <>
{/* Accordian Component */}
{/* <Accordian/> */}
<BioProvider>
  <Home/>
  <About/>
</BioProvider>
</>
    
  )
}

export default App
