import React from 'react'
import './Singlebag.css'
import host from '../image/hosting.png'
import home from '../image/wholesale.png'
import shopping from '../image/online-shopping1.png'
import Card from 'react-bootstrap/Card';
import books from '../image/book.png';
import earning from '../image/revenue.png'
export default function Imagecards() {
  return (
  <>
  <div className='container'>
    <div className='row mt-4'>
        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12'>
            <h3 className='offer'>What do we offer?</h3>
        </div>
    </div>


    <div className='row mt-4'>
<div className='d-flex gap-4 col-lg-12 col-xl-12 col-xxl-12'>

<div className="card  shadow-sm p-3 mb-5 bg-white rounded">
  <img src={host} className=" img-fluid mt-3  px-3 imghost w-25" />
  <div className="card-body">
    <h5 className="card-title mt-2 offer">Start an online business</h5>
    <p className="text-muted mt-2">Build your online store in a few easy steps. No coding knowledge is required, just your idea and passion!</p>
  </div>
</div>



<div className="card shadow-sm p-3 mb-5 bg-white rounded">
  <img src={home} className=" img-fluid mt-3  px-3 imghost w-25" />
  <div className="card-body">
    <h5 className="card-title mt-2 offer">Become a wholesaler</h5>
    <p className="text-muted mt-2">Become a wholesaler and connect with multiple store owners and businesses.</p>
  </div>
</div>




<div className="card shadow-sm p-3 mb-5 bg-white rounded ">
  <img src={shopping} className=" img-fluid mt-3  px-3 imghost w-25" />
  <div className="card-body">
    <h5 className="card-title mt-2 offer">Become a reseller</h5>
    <p className="text-muted mt-2">Become a reseller and earn money like a full fledged entrepreneur.</p>
  </div>
</div>
</div>









    </div>



<div className='row mt-2'>
    <div className='col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12'>

    <div className="card cards shadow-sm p-3 mb-5 bg-white rounded ">
  <img src={books} className=" img-fluid mt-3  px-3 imghost w-25" />
  <div className="card-body">
    <h5 className="card-title mt-2 offer">Share your knowledge</h5>
    <p className="text-muted mt-2">Educate others and get educated, join our Community Forum and network with online store owners from any part of the world.</p>
  </div>
</div>
    </div>




    <div className='col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12'>

    <div className="card cards shadow-sm p-3 mb-5 bg-white rounded ">
  <img src={earning} className=" img-fluid mt-3  px-3 imghost w-25" />
  <div className="card-body">
    <h5 className="card-title mt-2 offer">Earn a recurring revenue</h5>
    <p className="text-muted mt-2">Partner with Singlebag and help other businesses create their ecommerce stores and earn a commission.</p>
  </div>
</div>
    </div>
</div>
  </div>
  </>
  )
}
