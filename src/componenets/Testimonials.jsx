import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { TestimonialsImage } from '../assets/images'

const Testimonials = () => {
  return (
    <>
        <div className='mt-20 bg-[#F0F0F0] '>
            <div className='flex w-[80%] m-auto'>
            <div className='p-8'>

                <div className='flex bg-[#FFD978] text-black p-1 justify-center rounded-[100px] w-[216px] '>
                    <Typography className='text-[14px]'>TESTIMONIALS</Typography>
                </div>

                <br></br>

                <div>
                    <Typography variant='h1'>Hear What</Typography>
                    <Typography variant='h1'>business owners</Typography>
                    <Typography variant='h1'>are saying</Typography>
                </div>

                <br></br>

                <div className='border-2 border-[#191919] w-[300px] '></div>

                <br></br>

                <div className='w-[280px]'>
                    <Typography>Projectile works for industry leaders as well as small business owners. We can help with the right plan for your organization.</Typography>
                </div>

                <br></br>
                
                <div>
                    <Button>See All Reviews</Button>
                </div>
            </div>

            <div className='ml-[26vw] mt-5'>
                <img src={TestimonialsImage} alt='TestimonialsImage'/>
            </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials