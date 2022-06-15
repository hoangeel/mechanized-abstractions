import React, {useState} from 'react'
import "./index.scss"
import Footer from '../../Footer'
import Header from '../../Header'
import HomeScreenPreMint from '../HomeScreenPreMint'

export default function HomeScreen() {
  const [className,setClassName]=useState()
  const [homeScreenPreMint,setHomeScreenPreMint]=useState()
  function onclickHomeScreenPreMint() {
    setClassName("delete")
    setHomeScreenPreMint(<HomeScreenPreMint/>)
  }
  return (
    <div>
      <div className={className}>
        <div className='HomeScreen' onClick={onclickHomeScreenPreMint}>
          <Header/>
          <div className='ContentHomeScreen'>
              <div className='imgs'>
                <div className='ImgHomeScreen'>
                  <div className='Icon'></div>
                </div>
              </div>
              <div className='description'>
                  100% on-chain generative art optimized for the twitter banner
              </div>
              <p>Minting soon</p>
          </div>
          <Footer/>
        </div>
      </div>
      {homeScreenPreMint}
    </div>
  )
}
