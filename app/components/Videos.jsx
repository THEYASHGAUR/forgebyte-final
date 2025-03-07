import React from 'react'


export const Videos = ({src}) => {
    return(
        <video className='absolute w-[100%] object-cover h-screen' autoPlay loop muted>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
}

export default Videos