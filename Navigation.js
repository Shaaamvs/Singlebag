import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../index.css'
import Button from 'react-bootstrap/Button';
import Logo from '../image/Singlebag-New-Logo.png';
export default function Navigation() {
  return (
    <>
    <Navbar  bg="light">
      <img src={Logo} className='logo'/>

      <ul className='d-flex gap-5 my-2 header '>
        <li className='title'>
          Seller
        </li>
        <li className='title'>
          Reseller
        </li>
        <li className='title'>
        Supplier
        </li> 
        <li className='title'>
          Features
        </li>
        <li className='title'>
          Pricing
        </li>
      </ul>
<div className='button mx-4 px-5'>
<button type='button' className='loginbutton p-1'>Login</button>
</div>

<div className='button'>
<button type='button' className='createbutton p-1'>Create Store</button>
</div>
            
    </Navbar>
    
    </>
  )
}
