import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { PenTipIcon } from '../assets/icons'
import { DesignAdImage } from '../assets/images'

const AdLayer = () => {
  return (
    <>
        <div className='mt-20 text-center w-[80%] m-auto'>
            <div className='m-auto'>
                <div className='text-[#fff]'>
                    <Typography variant="h1" className='leading-[64px]'>Easy project management</Typography>
                    <Typography variant="h1"className='leading-[64px]'>that helps you win</Typography>
                </div>

                <br></br>
                <br></br>

                <div className='flex flex-wrap justify-center gap-8'>
                    <Button className=''>Status Tracker</Button>
                    <Button>New Dashboard</Button>
                    <Button>All Deadlines</Button>
                    <Button>Alerts & Reports</Button>
                </div>

                <br></br>
                <br></br>

                <div className='flex flex-wrap bg-[#191919] rounded-[14px] text-[#fff]'>
                    
                    <div className='self-center text-left ml-20'>
                        <PenTipIcon/>
                        <Typography variant='h3'>Smarter</Typography>
                        <Typography variant='h3'>Managment</Typography>
                        <Typography className='text-[12px]'>
                            Boost revenue, gain insights that help 
                        </Typography>
                        <Typography className='text-[12px]'>
                            you grow and scale faster.
                        </Typography>
                    </div>
                
                    <div className='self-center ml-[auto]'>
                        <img src={DesignAdImage} className='rounded-[14px]'/>
                    </div>

                </div>


            </div>

        </div>
        <br></br>
    </>
  )
}

export default AdLayer