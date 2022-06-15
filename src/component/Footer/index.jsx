import React from 'react'
import "./index.scss"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='contentFooter'>
            <div className='total_pieces'>
                <h6>1,234 </h6>
                <p>total pieces</p>
            </div>
            <div className='mint_price'>
                <h6>0.08Ξ</h6>
                <p>mint price</p>
            </div>
            <div className='ethereum'>
                <h6>100% on-chain</h6>
                <p>ethereum</p>
            </div>
            <div className='using_chainlink'>
                <h6>verifiably random</h6>
                <p>using chainlink</p>
            </div>
        </div>
    </div>
  )
}
