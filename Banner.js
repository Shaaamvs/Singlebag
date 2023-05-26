import React from 'react'
import homeBanner from '../image/Singlebag-Homepage-banner.png'
import { Container } from 'react-bootstrap'
import './Banner.css'
export default function Banner() {
  return (
<>
<div className='bg-light'>
<div className='container '>
    <div className='row '>
        <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-7'>
<h1 className='mt-5 Global'>The Global
<br/>
Commerce <br/>Platform For You</h1>

<p className='text-muted my-3' >Building your business is now made easy with Singlebag!</p>


<div className='button'>
<button type='button' className='Trail my-2'>Start Your free Trail </button>
</div>

<p className='text-muted my-4'>Try Singlebag free for 14 days, no credit card required. Start your online store without any coding knowledge.</p>
        </div>
        <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-5'>
<img src={homeBanner}/>



        </div>
    </div>
</div>

</div>
</>
  )
}
