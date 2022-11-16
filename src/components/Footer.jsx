import React from 'react'
import iGG from '../assets/iGG.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import logo2 from '../assets/logo2.png';

function Footer() {
  return (
    <div>
      
      <div class='bg-black text-white text-sm flex justify-around items-center flex-col sm:flex-col md:flex-row lg:flex-row '>
      <div class=''>
      <img class='py-6' src={logo2} alt='' />
        <div class='flex py-4'>
          <img class='p-2' src={fb} alt='fb' />
          <img class='p-2' src={iGG} alt='ig' />
          <img class='p-2' src={twitter} alt='twitter' />
        </div>
        <p>(c) 2022 Metabnb</p>
      </div>
      <div>
        <h1 class='font-bold py-3'>Community</h1>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      <div>
        <h1 class='font-bold py-3'>Places</h1>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>
      <div>
        <h1 class='font-bold py-3'>About us</h1>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </div>
      </div>
    </div>
  )
}

export default Footer;