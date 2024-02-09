import React from 'react'
import { ContactImage1, ContactImage2 } from '../assets/images'
import { Button, Typography } from '@material-tailwind/react'

const ContactUs = () => {
  
    return (
    <>
        <div className='mt-20 bg-[#87C51E] text-black'>

            <div>
                <img src={ContactImage1} alt='ContactImage1'/>
            </div>

            <div className='text-center -mt-20'>

                <div className='flex bg-[#FFF] text-black p-1 justify-center rounded-[100px] w-[200px] m-auto'>
                    <Typography className='text-[14px]'>CONTACT US</Typography>
                </div>

                <br></br>

                <div>
                    <Typography variant='h1'>Scale faster and more</Typography>
                    <Typography variant='h1'>predictably with Projectile.</Typography>
                    <br></br>
                    <Typography className="text-[18px]">Join 10k+ teams who have streamlined the way they manage projects and collaborate remotely.</Typography>
                </div>
            </div>

            <br></br>

            <div className='flex justify-center gap-10'>
                <Button className='bg-black'>Get Started Now</Button>
                <Button className='bg-white text-black'>Request Free Demo</Button>
            </div>

            <br></br>

            <div>
                <img src={ContactImage2} alt="ContactImage2" className='ml-auto'/>
            </div>

        </div>
    </>
  )
}

export default ContactUs