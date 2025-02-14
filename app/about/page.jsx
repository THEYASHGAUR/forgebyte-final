import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'

const page = () => {
  return (
    <>
    <Header />

    {/* hero section */}
    <section className='bg-black w-full h-96 flex items-center justify-center'>
      <h1 className='text-3xl text-white'>Journey of innovation and excellence</h1>
    </section>
    </>
  )
}

export default page
