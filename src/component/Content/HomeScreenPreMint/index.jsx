import React, {useState} from 'react'
import Footer from '../../Footer'
import ConnectWallet from '../ConnectWallet'
import "./index.scss"

export default function HomeScreenPreMint() {
    const [className,setClassName] =useState()
    const [connectWallet,setConnectWallet] =useState()
    function onClickPreMint(){
        setClassName("deletePreMint")
        setConnectWallet(<ConnectWallet/>)
    }
  return (
    <div>
        <div className={className}>
            <div className='HomeScreenPre_mint' >
                <div className='header_HomeScreenPre_mint'>
                    <div className='content_header_HomeScreenPre_mint'>
                        <div className='mechanized_abstractions'>mechanized <b>abstractions</b></div>
                        <div className='menu'>
                            <div className='DISCORD'>DISCORD</div>
                            <div className='TWITTER'><div></div>TWITTER</div>
                            <div onClick={onClickPreMint} className='Pre_mint'>
                                Pre-mint
                                <div className='clickColor'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ContentHomeScreenPre_mint'>
                    <div className='ContentContentHomeScreenPre_mint'>
                        <div className='imgs'>
                        <div className='ImgHomeScreen'>
                            <div className='Icon'></div>
                        </div>
                        </div>
                        <div className='description'>
                            100% on-chain generative art optimized for the twitter banner
                        </div>
                        <div className='text'><p>Pre-mint is active now for early members who joined our waitlist. Public mint coming soon.</p></div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
        {connectWallet}
    </div>
  )
}
