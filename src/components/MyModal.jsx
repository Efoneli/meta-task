import React from 'react'
import metaM from '../assets/metaM.png';
import wallet from '../assets/wallet.png';
import arrow from '../assets/arrow.png';

function MyModal({ visible, onClose }) {
    const handleOnClose = (e) => {
       if (e.target.id === 'container') onClose();
    };

    if(!visible) return null;

  return (
    <div
    id='container'
     onClick={handleOnClose}
      className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 rounded-lg'>
        <div>
            <div className='flex justify-between px-2'>
                <p className='text-xl font-bold m-2'>Connect Wallet</p>
                <button onClick={onClose}>X</button>
            </div>
            <p className='m-2'>Choose your preferred wallet:</p>
            <div className='w-[500px] flex justify-between items-center px-2 border-solid border-2 border-grey-500 rounded-xl m-2 p-2'>
                <img src={metaM} alt='meataM' />
                <img src={arrow} alt='arrow' />
            </div>
            <div className='w-[500px] flex justify-between items-center px-2 border-solid border-2 border-grey-500 rounded-xl m-2 p-2'>
                <img src={wallet} alt='wallet' />
                <img src={arrow} alt='arrow' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default MyModal;