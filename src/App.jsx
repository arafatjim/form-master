import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './StateFullForm/StateFullForm'
import RefForm from './Components/RefForm/RefForm'
import HookForm from './Components/HookForm/HookForm'
import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
import GrandPa from './Components/GrandPa/GrandPa'

function App() {
 
  const handleRegisterSubmit = data =>{
    console.log('Registration data :',data)
} 
 const handleLoginSubmit = data =>{
    console.log('Log in data :', data)
}
const handleUpdateProfile = data =>{
  console.log('Registration data :',data)
}

  return (
    <>
    <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUsableForm 
              formTitle={'Register Here'} 
              handleSubmit={handleUpdateProfile}>
                <div>
                  <h3>Welcome to my website !!!</h3>
                  <p>Please register your profile</p>
                </div>
      </ReUsableForm>
      <ReUsableForm 
            formTitle={'Sign in'} 
            submitBtnText={'Log in'}
             handleSubmit={handleLoginSubmit}>
              <div>
                <h2>Welcome to Log in Page .</h2>
                <p>Always update your profile.</p>
              </div>
      </ReUsableForm>

      <GrandPa></GrandPa>
    </>
  )
}

export default App
