import React from 'react'
import Footer from '../components/Footer'
import { Star, ThumbsUp } from 'lucide-react'

const page = () => {
  return (
    <main className='overflow-x-hidden'>
      
      <div className='md:min-h-[682px] min-h-[500px] sm:min-h-[600px] flex flex-col overflow-hidden gap-y-10 justify-center px-4 sm:px-8 md:px-16 lg:px-40 relative bg-[#031e2e]'>
        {/* Absolute positioned elements remain unchanged */}
        <div className='absolute -left-[400px] size-[711px] rounded-full bg-gradient-to-t from-[#041F3F] via-[#103B5B] to-[#194F6F] blur-lg backdrop-blur-lg' />
        <div className='absolute hidden md:block -bottom-1/4 -right-1/4 size-[711px] rounded-full bg-gradient-to-t from-[#041F3F] via-[#103B5B] to-[#194F6F] blur-lg backdrop-blur-lg' />
        <div className='absolute hidden lg:block right-1/3 top-[10%] size-[136px] rounded-full bg-gradient-to-t from-[#041F3F] via-[#103B5B] to-[#194F6F] blur-lg backdrop-blur-lg' />
        <div className='absolute flex flex-wrap justify-evenly items-center bottom-0 right-0 h-auto sm:h-[179px] w-3/4 sm:w-[500px] md:w-[720px] bg-white rounded-l-[40px] rounded-tr-[40px] p-4'>
          {['Project Completed', 'World Wide Client', 'Awards Received', 'Clients Satisfaction'].map((item, index) => (
            <div key={index} className='text-center mb-4 sm:mb-0'>
              <h2 className='text-[#0a2b3e] font-semibold text-2xl sm:text-4xl'>150+</h2>
              <p className='text-sm sm:text-base'>{item.split(' ').map((word, indexs) => <span key={indexs}>{word}<br/></span>)}</p>
            </div>
          ))}
        </div>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold z-20 mt-8 sm:mt-0'>Journey of Innovation<br/>and Excellence</h1>
        <p className='text-white z-20 text-base sm:text-lg md:text-xl w-full sm:w-10/12 md:w-8/12 lg:w-7/12'>Our journey from beginnings to breakthroughs has been fueled by innovation, dedication, and an unyielding commitment to excellence</p>
      </div>
      <div className='flex flex-col py-20 sm:py-40 relative justify-center items-center gap-y-10 sm:gap-y-20'>
        {/* Absolute positioned elements remain unchanged */}
        <div className='absolute -right-48 top-96 size-80 bg-gradient-to-t from-[#053642] via-[#2d7790] to-[#7cd2d6] opacity-50 rounded-full backdrop-blur-xl blur-md' />
        <div className='absolute left-[700px] size-20 bg-gradient-to-t from-[#053642] via-[#2d7790] to-[#7cd2d6] opacity-50 rounded-full backdrop-blur-xl blur-md' />
        <div className='absolute size-[450px] -left-80 bottom-5 bg-gradient-to-t from-[#053642] via-[#2d7790] to-[#7cd2d6] opacity-50 rounded-full backdrop-blur-xl blur-md' />
        <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[53px] text-center'>Focusing on quality, <span className='text-[#124666]'>we<br/>maintain customer trust</span></h1>
        <div className='flex flex-wrap justify-center gap-8 sm:gap-x-20 mb-10 sm:mb-20'>
          {['Yoom', 'Trexo', 'Fleetr'].map((item, index) => (
            <div key={index} className='w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-white [box-shadow:_0px_6px_14px_0px_#0000005C] flex justify-center items-center text-3xl sm:text-5xl font-semibold'>{item}</div>
          ))}
        </div>
        <h1 className='text-[#0B2636] text-4xl sm:text-5xl md:text-6xl font-extrabold'>Testimonials</h1>
        <div className='flex flex-wrap justify-center gap-8 sm:gap-x-10 z-10'>
          {[
            { name: 'Yoom', role: 'Founder', text: 'Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.' },
            { name: 'Fleetr', role: 'Founder and CEO', text: 'Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!' },
            { name: 'Trexo', role: 'Founder', text: 'Since I invested in software I made over 100,000 dollars profits. The service was excellent. I wish I would have thought of it first.' }
          ].map((testimonial, index) => (
            <div key={index} className={`w-[320px] flex flex-col justify-center bg-white [box-shadow:_0px_28.93px_61.56px_0px_#15151540;] ${index%2!=0?'gap-y-8 p-10 h-[361.55px]':'gap-y-6 sm:gap-y-8 p-6 sm:p-10 h-auto sm:h-[313.55px]'}`}>
              <div className='flex justify-between items-center'>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                  ))}
                </div>
                <div className='flex items-center'>
                  <ThumbsUp className='size-[16.66px] bg-[#5D5DFF] fill-white stroke-none text-[#5d5dff] p-1 rounded-full' />
                  <p className='text-xs font-bold ml-1'>Testimonial</p>
                </div>
              </div>
              <h4 className='font-normal text-base sm:text-xl'>{testimonial.text}</h4>
              <div className='flex gap-x-1 items-center'>
                <div className='w-[37.88px] h-[37.88px] rounded-full bg-black'></div>
                <div>
                  <h3 className='text-sm font-extrabold'>{testimonial.name}</h3>
                  <p className='text-xs font-normal'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default page
