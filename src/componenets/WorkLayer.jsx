import { Typography, List, ListItem, } from '@material-tailwind/react'
import React from 'react'
import { CheckIcon } from '../assets/icons'
import { ProductivityCard, TransparnetlyCard, WorkFasterCard } from './WorkCards'

const WorkLayer = () => {

  return (
    <>
        
        <div className='bg-[#F0F0F0]'>
        {/* 1st WORK RESPONSIVELY */}
        <br></br>

        <div className='mt-20 bg-[#ffff] text-center w-[80%] m-auto rounded-[20px] '>
            <div className='flex ml-20'>

                <div className='flex flex-col self-center'>
                    <div className='flex bg-[#CFB8FF] text-black p-1 justify-center rounded-[100px]'>
                        <Typography className='text-[14px]'>WORK RESPONSIVELY</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography variant='h2'>Stay agile in an</Typography>
                        <Typography variant='h2'>evolving industry</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography >Plan and execute with confidence as you</Typography>
                        <Typography >preempt problems and adapt on the go.</Typography>
                    </div>
                    <div>
                        <List className='-ml-[20px]'>
                            <ListItem >
                                <CheckIcon/> {' '} Avoid roadblock
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Beat deadline
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Delivery every time
                            </ListItem>
                        </List>
                    </div>
                </div>
                
                <div className='mt-5 mb-5 ml-[18vw]'>
                    <ProductivityCard/>
                </div>

            </div>
        </div>
        <br></br>




        {/* 2nd WORK TRANSPARENTLY */}



        <div className='mt-20 bg-[#ffff] text-center w-[80%] m-auto rounded-[20px] '>
            <div className='flex ml-20'>

            <div className='mt-5 mb-5'>
                    <TransparnetlyCard/>
                </div>

                <div className='flex flex-col self-center ml-[15vw]'>
                    <div className='flex bg-[#FFD978] text-black p-1 justify-center rounded-[100px]'>
                        <Typography className='text-[14px]'>WORK TRANSPARENTLY</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography variant='h2'>Get complete</Typography>
                        <Typography variant='h2'>Visibility and</Typography>
                        <Typography variant='h2'>control</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography >With a customizable dashboard, know the status of</Typography>
                        <Typography >your project at a glance.</Typography>
                    </div>
                    <div>
                        <List className='-ml-[20px]'>
                            <ListItem >
                                <CheckIcon/> {' '} Track key metrics and tasks
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Set up alerts for specific triggers
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Stay on top of your daily porgress
                            </ListItem>
                        </List>
                    </div>
                </div>
                
                

            </div>
        </div>
        <br></br>





        {/* 3rd WORK TRANSPARENTLY */}

        <div className='mt-20 bg-[#ffff] text-center w-[80%] m-auto rounded-[20px] '>
            <div className='flex ml-20'>

                <div className='flex flex-col self-center'>
                    <div className='flex bg-[#C9FA75] text-black p-1 justify-center rounded-[100px]'>
                        <Typography className='text-[14px]'>WORK FASTER</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography variant='h2'>Streamline</Typography>
                        <Typography variant='h2'>workflow to save</Typography>
                        <Typography variant='h2'>hours</Typography>
                    </div>
                    <br></br>
                    <div className='text-left'>
                        <Typography >Spend less time on organizing and tracking, and more</Typography>
                        <Typography >time on core functions for your projects.</Typography>
                    </div>
                    <div>
                        <List className='-ml-[20px]'>
                            <ListItem >
                                <CheckIcon/> {' '} Set up workflows only once
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Tweak and use for multiple projects
                            </ListItem>
                            <ListItem>
                                <CheckIcon/> {' '} Automate reminders, alerts and more
                            </ListItem>
                        </List>
                    </div>
                </div>
                
                <div className='mt-5 mb-5 ml-[15vw]'>
                    <WorkFasterCard/>
                </div>

            </div>
        </div>
        <br></br>
        </div>
    </>
  )
}

export default WorkLayer