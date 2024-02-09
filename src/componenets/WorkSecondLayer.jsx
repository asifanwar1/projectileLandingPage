import { Typography, List, ListItem, } from '@material-tailwind/react'
import React, { useState } from 'react'
import { CheckIcon, DotIcon } from '../assets/icons'
import { ProductivityCard, TransparnetlyCard, WorkFasterCard } from './WorkCards'
import { BarChartImage, PersonCardImage } from '../assets/images'

const WorkSecondLayer = () => {

    const [steps, setSteps] = useState([
        {num: 1, title: 'Set up and get organized', txt: 'Define your plan, set up workflows, add team members, mark deadlines.', bgColor: '#C9FA75'},
        {num: 2, title: 'Start monitoring progress', txt: 'Create triggers for alerts and notifications and analyze performance in real-time.', bgColor: '#FFD978'},
        {num: 3, title: 'Stay on track throughout', txt: 'Stay ahead of potential roadblocks and delays, get periodic updates.', bgColor: '#FA7A68'},
        {num: 4, title: 'Deliver every time', txt: 'Prioritize and course-correct based on situation and never miss a deadline.', bgColor: '#CFB8FF'},
    ])

  return (
    <>

        {/* 4th WORK EFFICENTLY */}

        <div className='mt-20 bg-[#272727] w-[80%] m-auto rounded-[20px] '>
            <div className='flex ml-20 text-white'>

                <div className='flex flex-col self-center mt-20'>
                    <div className='flex bg-[#67D6FA] text-black p-1 justify-center rounded-[100px]'>
                        <Typography className='text-[14px]'>WORK EFFICENTLY</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography variant='h2'>Measure with real-</Typography>
                        <Typography variant='h2'>time analytics</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography >Analyze your team's performance, ientify and</Typography>
                        <Typography >solve bottelnecks faster.</Typography>
                    </div>
                    </div>
                    <div className='mt-20 ml-[45%]'>
                        <List className='-ml-[20px]'>
                            <ListItem >
                                <CheckIcon/> {' '} Track time spent on individual tasks
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Get automated daily and weekly reports
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Distribute workload more efficiently
                            </ListItem>
                        </List>
                    </div>
            </div>

            <br></br>

            <div className='flex ml-20'>
                <div className='flex bg-[#191919] p-5 text-white text-start rounded-[16px] '>
                    <div className='self-center'>
                    <Typography className='ml-5'>Time Segmentation</Typography>
                    
                    <List className=' text-white' list="disc">
                        <ListItem className='gap-5'><DotIcon/>Design</ListItem>
                        <ListItem className='gap-5'><DotIcon/> Development</ListItem>
                        <ListItem className='gap-5'><DotIcon/> Copywriting</ListItem>
                        <ListItem className='gap-5'><DotIcon/> Not specified</ListItem>                            
                    </List>
                    </div>
                    <div className='flex'>
                        <img src={BarChartImage} alt='BarChartImage' className='w-[250px] self-center'/>
                    </div>
                </div>

                <div className='ml-[30%]'>
                    <img src={PersonCardImage} alt='PersonCardImage'/>
                </div>
            </div>
            <br></br>
        </div>
        <br></br>


        <div className='text-white w-[80%] m-auto mt-20' >
            <div className='flex bg-[#CFB8FF] text-black p-1 justify-center rounded-[100px] w-[216px] m-auto '>
                <Typography className='text-[14px]'>HOW DOES IT WORK</Typography>
            </div>
            <br></br>
            <div className='text-center'>
                <Typography variant='h1'>4 easy steps to your goals</Typography>
            </div>
            <br></br>
            <div className='flex gap-10'>
                {steps.map((element, index) => (
                   <div key={index} className='bg-[#272727] rounded-[15px] p-10'>
                        <div style={{backgroundColor: element.bgColor, padding:'18px 18px 19px 20px'}} className='w-[80px] h-[80px] text-center text-black rounded-[14px] m-auto '>
                            <Typography variant='h3'>0{element.num}</Typography>
                        </div>
                        <br></br>
                        <div className='text-center mt-5'>
                            <Typography variant='h5'>{element.title}</Typography>
                            <br></br>
                            <Typography>{element.txt}</Typography>
                        </div>
                   </div>
                ))}
            </div>
        </div>


    </>
  )
}

export default WorkSecondLayer