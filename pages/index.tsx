import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '../typings';
import {sanityClient,urlFor} from "./../sanity";

interface Props { 
  collections : Collection[]
}


const Home= ( {collections} : Props) => {

  return (
    <div className="lg:px-12 lg:pt-12 h-screen">
      <Head>
        <title>NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='w-52 mb-12  self-center cursor-pointer text-xl font-extralight sm:w-80' 
        >NFTs 
        {''} <span className='font-bold text-gray-900 underline underline-offset-2 decoration-green-600/50 '>
        Mini 
        </span> {''}
        Marketplace</h1>

        <div className="bg-[#0F1318] rounded-t-md text-slate-100 w-full h-fit max-h-[500vh] p-24 
        shadow-md shadow-green-400/30 flex items-start justify-start">
          <div className='grid gap-12 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4'>
            {collections.map( (collection) => (
              <Link href={`/nft/${collection.slug.current}`} >
              <div className='flex flex-col hover:shadow-xl hover:border-green-400/50 hover:shadow-green-400/30
              bg-[#1B2129] border border-gray-700 hover:bg-transparent
              rounded-2xl px-5 pt-6 items-start justify-start cursor-pointer transition
              ease-in-out duration-200  hover:scale-105'>
                <img className='h-96 w-[500px] rounded-2xl object-cover object-center' 
                src={urlFor(collection.mainImage).url()} />
                <div className='my-4 px-3'>
                  <h2 className="text-3xl">{collection.title}</h2>
                  <p className='mt-2 text-sm text-gray-400'>
                    {collection.description}</p>
                </div>
              </div>
                 </Link>
            ))}
          </div>

        </div>
    </div>
  )
}

export default Home; 

export const getServerSideProps:GetServerSideProps = async () => {
  const query = `*[_type=="collection"]{
  _id,
  title,
  address,
  description,
  nftCollection,
  mainImage { 
asset
},
previewImage { 
asset
},
slug { 
current
},
creator-> { 
_id,
  name,
  address,
  slug { 
  current
},
},
}`
const collections  = await sanityClient.fetch(query)

return { 
  props : {
    collections,
  }
}
}
