import "./index.scss"
import React, {useState} from "react" ;
import Gallery from "../Gallery";


export default function ConnectWallet() {
  const [chane,setChane] = useState(Connect)
  const [gallery,setGallery] = useState()
  const [clear,setClear] = useState()
  
  function Connect() {
    function onclickConnectWallet() {
      setChane(Mint)
    }
    return(
      <div>
        <div className='Connect_Wallet'><button onClick={onclickConnectWallet}>Connect Wallet</button></div>
          <div className='text'>
            <div className='texts'>
              <div className='text_1'>Disclaimer: being on our whitelist does <b>not</b> gaurantee you a pre-mint piece. There are not enough for everyone.</div>
              <div className='text_1 text_2 '>It does, however, put you in a small group of people who will have access to these pieces.</div>
            </div>
          </div>
      </div>
    )
    }

    function Mint() {
      function onclickMintOne() {
        setChane(TRANSCATION)
      }
      return(
        <div className='click'>
                <div className='mint'>
                  <div onClick={onclickMintOne} className='one'>
                    <h5>1</h5>
                    <p>click here to mint one</p>
                  </div>
                  <div  className='two'>
                    <h5>2</h5>
                    <p>click here to mint two</p>
                  </div>
                </div>
        </div>
      )
    }

  function TRANSCATION(){
    function onclickMintTwo() {
      setGallery(<Gallery/>)
      setClear("deleteConnect")
    }
    return(
      <div>
        <div className='click'>
          <div className='mint'>
            <div  className='oneAfter'>
              <h5>1</h5>
              <p>click here to mint one</p>
            </div>
            <div onClick={onclickMintTwo}  className='twoAfter'>
              <h5>2</h5>
              <p>click here to mint two</p>
            </div>
          </div>
        </div>
        <div className="mintOne">TRANSCATION DECLINED BY WALLET</div>
      </div>
    )
  }
  return (
    <div>
      <div className={clear}>
        <div className='ConnectWallet' >
          <div className='header_ConnectWallet'>
              <div className='content_header_ConnectWallet'>
                  <div className='mechanized_abstractions'>mechanized <b>abstractions</b></div>
                  <div className='menu'>
                      <div className='DISCORD'>DISCORD</div>
                      <div className='TWITTER'>TWITTER</div>
                      <div className='Pre_mint'>Pre-mint</div>
                  </div>
              </div>
          </div>
          <div className='content_ConnectWallet'>
            <h1>452/592 minted</h1>
            <div className='line'><div></div></div>
            {chane}
          </div>
          <div className='footer_ConnectWallet'>
            <h2>PREMINT DETAILS</h2>
            <h4>the pre-mint is only available to early community members who joined our waitlist </h4>
            <div className='group_footer_ConnectWallet'>
              <div className='group'>
                <div className='pieces'>
                  <h6>592</h6>
                  <p>pre-mint pieces</p>
                </div>
                <div className='wallet'>
                  <h6>2</h6>
                  <p>limit per wallet</p>
                </div>
                <div className='deadline'>
                  <h6>Nov 19 2pm UTC</h6>
                  <p>pre-mint deadline</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      {gallery}
    </div>
  )
}
