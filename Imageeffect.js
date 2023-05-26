import React from 'react'
import image1 from '../image/Singlebag-Theme-1.jpg'
import image2 from '../image/Singlebag-Theme-2.jpg'
import image3 from '../image/Singlebag-Theme-3.jpg'
import image4 from '../image/Singlebag-Theme-4.jpg'
import image5 from '../image/Singlebag-Theme-5.jpg'
import image6 from '../image/Singlebag-Theme-6.jpg'

export default function Imageeffect() {
  return (
   <>
  <div className='container'>
    <div className='row mt-5'>
<div className='col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-md-4'>
    <img src={image1} className='img-fluid img1 shadow-sm p-2 mb-2 bg-body rounded'/>
    </div>



    <div className='col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-md-4'>
    <img src={image2} className='img-fluid img1 shadow-sm p-2 mb-2 bg-body rounded'/>
    </div>




    <div className='col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-md-4'>
    <img src={image3} className='img-fluid  img1 shadow-sm p-2 mb-2 bg-body rounded'/>
    </div>
   </div>


   <div className='row mt-5'>
<div className='col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-md-4'>
    <img src={image4} className='img-fluid  img1 shadow-sm p-2 mb-2 bg-body rounded'/>
    </div>



    <div className='col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-md-4'>
    <img src={image5} className='img-fluid img1 shadow-sm p-2 mb-2 bg-body rounded'/>
    </div>




    <div className='col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-md-4'>
    <img src={image6} className='img-fluid img1 shadow-sm p-2 mb-2 bg-body rounded'/>
    </div>
   </div>
   </div>
   

   </>
  )
}
