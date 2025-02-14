import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Star, ThumbsUp } from 'lucide-react'

const page = () => {
  return (
    <div>
      
      <div className='h-[682px] flex flex-col overflow-hidden gap-y-10 justify-center px-40 relative bg-[#031e2e]'>
        <div className='absolute -left-[400px] size-[711px] rounded-full bg-gradient-to-t from-[#041F3F] via-[#103B5B] to-[#194F6F] blur-lg backdrop-blur-lg' />
        <div className='absolute -bottom-1/4 -right-1/4 size-[711px] rounded-full bg-gradient-to-t from-[#041F3F] via-[#103B5B] to-[#194F6F] blur-lg backdrop-blur-lg' />
        <div className='absolute right-1/3 top-[10%] size-[136px] rounded-full bg-gradient-to-t from-[#041F3F] via-[#103B5B] to-[#194F6F] blur-lg backdrop-blur-lg' />
        <div className='absolute flex justify-evenly items-center bottom-0 right-0 h-[179px] w-[720px] bg-white rounded-l-[40px] rounded-tr-[40px]'>
          <div>
            <h2 className='text-[#0a2b3e] font-semibold text-4xl'>150+</h2>
            <p>Project<br/>Completed</p>
          </div>
          <div>
            <h2 className='text-[#0a2b3e] font-semibold text-4xl'>150+</h2>
            <p>World Wide<br/>Client</p>
          </div>
          <div>
            <h2 className='text-[#0a2b3e] font-semibold text-4xl'>150+</h2>
            <p>Awards<br/>Received</p>
          </div>
          <div>
            <h2 className='text-[#0a2b3e] font-semibold text-4xl shadow-[4px_4px_5px_0px_rgba(0, 0, 0, 0.15)]'>150+</h2>
            <p>Clients<br/>Satisfaction</p>
          </div>
        </div>
        <h1 className='text-white text-7xl font-bold z-20'>Journey of Innovation<br/>and Excellence</h1>
        <p className='text-white z-20 text-xl w-7/12'>Our journey from beginnings to breakthroughs has been fueled by innovation, dedication, and an unyielding commitment to excellence</p>
      </div>
      <div className='flex flex-col py-40 relative justify-center items-center gap-y-20'>
        <div className='absolute -right-48 top-96 size-80 bg-gradient-to-t from-[#053642] via-[#2d7790] to-[#7cd2d6] opacity-50 rounded-full backdrop-blur-xl blur-md' />
        <div className='absolute left-[700px] size-20 bg-gradient-to-t from-[#053642] via-[#2d7790] to-[#7cd2d6] opacity-50 rounded-full backdrop-blur-xl blur-md' />
        <div className='absolute size-[450px] -left-80 bottom-5 bg-gradient-to-t from-[#053642] via-[#2d7790] to-[#7cd2d6] opacity-50 rounded-full backdrop-blur-xl blur-md' />
        <h1 className='font-semibold text-[53px]'>Focusing on quality, <span className='text-[#124666]'>we<br/>maintain customer trust</span></h1>
        <div className='flex gap-x-20 mb-20'>
          <div className='w-[240px] h-[240px] rounded-full bg-white [box-shadow:_0px_6px_14px_0px_#0000005C] flex justify-center items-center text-5xl font-semibold'>Yoom</div>
          <div className='w-[240px] h-[240px] rounded-full bg-white [box-shadow:_0px_6px_14px_0px_#0000005C] flex justify-center items-center text-5xl font-semibold'>Trexo</div>
          <div className='w-[240px] h-[240px] rounded-full bg-white [box-shadow:_0px_6px_14px_0px_#0000005C] flex justify-center items-center text-5xl font-semibold'>Fleetr</div>
        </div>
        <h1 className='text-[#0B2636] text-6xl font-extrabold'>Testimonials</h1>
        <div className='flex gap-x-10 z-10'>
          <div className='w-[320px] flex flex-col justify-center bg-white gap-y-8 p-10 h-[313.55px] [box-shadow:_0px_28.93px_61.56px_0px_#15151540;]'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
              </div>
              <div className='flex'>
                <ThumbsUp className='size-[16.66px] bg-[#5D5DFF] fill-white stroke-none text-[#5d5dff] p-1 rounded-full' />
                <p className='text-xs font-bold'>Testimonial</p>
              </div>
            </div>
            <h4 className='font-normal text-xl'>Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.</h4>
            <div className='flex gap-x-1'>
              <div className='w-[37.88px] h-[37.88px] rounded-full bg-black'></div>
              <div>
                <h3 className='text-sm font-extrabold'>Yoom</h3>
                <p className='text-xs font-normal'>Founder</p>
              </div>
            </div>
          </div>
          <div className='w-[320px] flex flex-col justify-center gap-y-8 p-10 h-[361.55px] [box-shadow:_0px_28.93px_61.56px_0px_#15151540;]'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
              </div>
              <div className='flex'>
                <ThumbsUp className='size-[16.66px] bg-[#5D5DFF] fill-white text-[#5d5dff] p-1 rounded-full' />
                <p className='text-xs font-bold'>Testimonial</p>
              </div>
            </div>
            <h4 className='font-normal text-xl'>Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!</h4>
            <div className='flex gap-x-1'>
              <div className='w-[37.88px] h-[37.88px] rounded-full bg-black'></div>
              <div>
                <h3 className='text-sm font-extrabold'>Fleetr</h3>
                <p className='text-xs font-normal'>Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className='w-[320px] flex flex-col justify-center gap-y-6 p-10 h-[313.55px] [box-shadow:_0px_28.93px_61.56px_0px_#15151540;]'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
                <Star className='size-[20.37px] fill-[#5d5dff] stroke-none' />
              </div>
              <div className='flex'>
                <ThumbsUp className='size-[16.66px] bg-[#5D5DFF] fill-white text-[#5d5dff] p-1 rounded-full' />
                <p className='text-xs font-bold'>Testimonial</p>
              </div>
            </div>
            <h4 className='font-normal text-xl'>Since I invested in software I made over 100,000 dollars profits. The service was excellent. I wish I would have thought of it first.</h4>
            <div className='flex gap-x-1'>
              <div className='w-[37.88px] h-[37.88px] rounded-full bg-black'></div>
              <div>
                <h3 className='text-sm font-extrabold'>Trexo</h3>
                <p className='text-xs font-normal'>Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
