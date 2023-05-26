import React from 'react'
import './Singlebag.css'
import banner from '../image/Singlebag-store.png'
export default function Content() {
  return (
    <div>
     <>
     <div className='bg-light'>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                <p className='display-6 text-dark text-center' >Create an online store with no coding knowledge</p>
            </div>
</div>
<div className='row'>
            <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
            <h3 className='offer text-center mt-2'>Ecommerce stores are now the powerhouse of building engaging business.</h3>
            </div>
        </div>




    <div className='row my-2'>
        <div className='col-lg-12 col-md-12 col-xxl-6 col-xl-6 col-sm-12 '>

<img src={banner} className='img-fluid rounded'/>
        </div>


        <div className='col-lg-12 col-md-12 col-xxl-6 col-xl-6 col-sm-12 '>

<h3 className='offer text-center mt-3'>Online Store for Every Business</h3>
<p className='text-muted my-4'>Sell anything and everything online by building an online store. The best deal is that you could sell everywhere, all around the globe. With a myriad of options for your storefront designs and abundant options for extensions, start your ecommerce store in a few simple steps and start selling with Singlebag.</p>
<button type="button" className="btn btn-outline-info my-4">Get Started</button>
</div>
    </div>
     </div>

   
     </div>




     </>
    </div>
  )
}
