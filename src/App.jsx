import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './StateFullForm/StateFullForm'

function App() {
 

  return (
    <>
    <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      <StateFullForm></StateFullForm>
    </>
  )
}

export default App
