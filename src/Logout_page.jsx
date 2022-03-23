import React from 'react'
import { useNavigate } from 'react-router'
import './App.css'
import Button from '@material-ui/core/Button'

function Logout_page() {
    let navigate = useNavigate()
  return (
    <div className='logout_con'>
      <div className='logout_page'>
          <h1>Welcome <span>User</span></h1>
          <Button className='logout_btn' variant='outlined' color='error'  onClick={() => {navigate('/')}}>Log-Out</Button>
      </div>
      
    </div>
  )
}

export default Logout_page
