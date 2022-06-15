import React from 'react'
import "./index.scss"

import LogoDiscord from "../../../assets/img/Discord.png"
import LogoTwitter from "../../../assets/img/twitter.jpg"


export default function Gallery() {
  return (
    <div className='Gallery'>
        <div className='header_Gallery'>
            <div className='content_header_Gallery'>
                <div className='mechanized_abstractions'>mechanized <b>abstractions</b></div>
                <div className='menu'>
                    <div className='DISCORD'>DISCORD</div>
                    <div className='TWITTER'>TWITTER</div>
                    <div className='LogoDiscord'>
                        <img src={LogoDiscord} alt="" />
                        <div className='hoverDISCORD'>DISCORD</div>
                    </div>
                    <div className='LogoTwitter'>
                        <img src={LogoTwitter} alt="" />
                        <div className='hoverTWITTER'>TWITTER</div>
                    </div>
                    <div className='Pre_mint'>0x139203292039b302</div>
                </div>
            </div>
        </div>

        <div className='content_Gallery'>
            <h1>My mechanized gallery</h1>
            <h2>pieces that you mint will display here</h2>
            <div className='img_Gallery_014'> <div></div></div>
            <h3>mechanized abstraction #014</h3>
            <h4>view live render • view on opensea</h4>
            <div className='img_Gallery_015'><div></div></div>
            <h3>mechanized abstraction #015</h3>
            <h4>view live render • view on opensea</h4>
        </div>
    </div>
  )
}
