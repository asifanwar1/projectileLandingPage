import React from 'react'
import { DollarIcon, IntegrationIcon, TeamIcon, UserIcon } from '../assets/icons'
import { Typography } from '@material-tailwind/react'

const Stats = () => {
  return (
    <>
        
        <div className='mt-20 bg-[#191919] w-[80%] m-auto rounded-[30px] p-[60px]'>
            <div className='flex flex-wrap text-[#fff] text-center justify-center'>
                <div className='w-[190px]'>
                    <IntegrationIcon className="m-auto"/>
                    <Typography className='font-[48px]'>100+</Typography>
                    <Typography className='font-[24px]'>App Integration</Typography>
                </div>
                <div className='w-[190px]'>
                    <UserIcon className="m-auto"/>
                    <Typography className='font-[48px]'>250k</Typography>
                    <Typography className='font-[24px]'>Total User</Typography>
                </div>
                <div className='w-[190px]'>
                    <DollarIcon className="m-auto"/>
                    <Typography className='font-[48px]'>3M</Typography>
                    <Typography className='font-[24px]'>Total Funding</Typography>
                </div>
                <div className='w-[190px]'>
                    <TeamIcon className="m-auto"/>
                    <Typography className='font-[48px]'>40+</Typography>
                    <Typography className='font-[24px]'>Team Members</Typography>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stats