import React from 'react'
import './Singlebag.css'
import Imageeffect from './Imageeffect'
import Imagecards from './Imagecards'
import Content from './Content'
export default function Singlebag() {
  return (
<>
<div className='container'>
    <div className='row'>
        <div className='col-xl-12 col-xxl-12 col-md-12 col-lg-12'>
<h1 className='singlebag'>Singlebag, The Best Ecommerce Platform for Best Results</h1>
        </div>
    </div>


    <div className='row'>

        <div className='col-xl-12 col-xxl-12 col-md-12 col-lg-12'>
            <p className='text-dark text-center'>We provide a cutting-edge platform for every business. Singlebag offers you the best tools to build
            </p>
 <p className='text-dark'>
 an online store through which your products will reach diverse customers, be it Cafes, Electronics, Flowers, Fast food, Furniture, Books, or any other product.</p>
        </div>
    </div>
</div>


<Imageeffect/>

<Imagecards/>

<Content/>
</>
  )
}
