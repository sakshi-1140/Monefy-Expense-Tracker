import React from 'react'
import SignUpSignIn from '../components/SignUpSignIn/SignUpSignIn'
import Header from '../components/Header/Header'


function Signup() {
  return (
    <div>
      <Header/>
      <div className='wrapper'>
        <SignUpSignIn/>
      </div>
    </div>
  )
}

export default Signup