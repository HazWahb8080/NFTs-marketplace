import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {
    
    // Auth 
    const connectMetaMask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();





  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>

        {/* left */}
        <div className='lg:col-span-4 bg-gradient-to-br  to-rose-500 from-cyan-800'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br to-purple-600 from-yellow-400 p-2 rounded-xl'>
                <img className='w-44 h-44 rounded-xl object-cover lg:h-96 lg:w-72'
                 src='https://ucarecdn.com/e9e4aecd-96c3-4477-9116-7d3a4a13323f/ape3.png'
                 />
                </div>
                 <div className='text-center p-5 space-y-2'>
                     <h1 className='text-4xl font-bold text-white'>SAD APE</h1>
                     <h2 className='text-xl text-gray-300'> A collection of apes nft.
                          A collection of apes nft. 
                    </h2>
                 </div>
            </div>
        </div>

        {/* right */}
        <div className='flex flex-1 p-12 flex-col lg:col-span-6 items-start justify-start'>

            {/* header */}
            <header className=' flex justify-between items-center w-full'>
                <h1 className='w-52 self-center cursor-pointer text-xl font-extralight sm:w-80' 
                 >NFTs 
                 {''} <span className='font-bold text-gray-900 underline underline-offset-2 decoration-green-600/50 '>
                  Mini 
                 </span> {''}
                  Marketplace</h1>
                <button onClick={() => (!address ? connectMetaMask() : disconnect())}
                 className={`rounded-full self-center bg-rose-400 text-white px-4 py-2 text-xs font-bold
                lg:py-3 lg:px-5 lg:text-base ${address ? "bg-gray-200 text-gray-800" : ""} `}> 
                { address ?  "Sign Out" : "Sign In"}
                </button>

            </header>

            <hr className='my-2 border border-gray-100 w-full' />
            {address && (
                <p className="w-full text-center italic mt-6 text-xs text-green-500"
                >you are logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>
            )}

            {/* content */}
            <div className='w-full mt-10 lg:justify-center flex flex-1 flex-col items-center space-y-4 text-center'>
                <img
                 className='lg:w-[700px] w-[500px] object-cover z-0 '
                 src="https://ucarecdn.com/3f1464c0-c190-4b30-812d-5131252b1c15/apes.webp" />
                 <h1 className='text-2xl font-bold lg:text-4xl text-gray-800 lg:font-extrabold'
                 >SAD APE CODING CLUB | NFTs DROP </h1>
                 <p className='text-green-500 text-lg pt-2'>13 / 21 NFT's Claimed</p>
            </div>






            {/* Mintbutton */}
            <button className='h-16 my-3 w-full bg-red-500 text-white rounded-full font-bold'>
                Mint NFT (0.01 ETH)
            </button>

        </div>
    </div>
  )
}

export default NFTDropPage;