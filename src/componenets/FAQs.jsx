import { List, ListItem, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { PlusIcon } from '../assets/icons'

const FAQs = () => {

    const [questions, setQuestions] = useState([
        {qes: 'Can I collaborate outside my organization?',},
        {qes: 'Is there a minimum contract?',},
        {qes: 'Is there a user limit on your basic plan?',},
        {qes: 'How secure is Projectile?',},
        {qes: 'How secure is Projectile?',},
        {qes: 'Can I extend the free trial?',},
    ])
  
    return (
    <>
        <div className='mt-40 bg-[#F0F0F0] text-black'>
            
            <div className='text-center p-5'>

                <div className='flex bg-[#67D6FA] text-black p-1 justify-center rounded-[100px] w-[200px] m-auto'>
                    <Typography className='text-[14px]'>COMMON QUESTIONS</Typography>
                </div>

                <br></br>

                <div>
                    <Typography variant='h1'>We've got you covered</Typography>
                </div>
                
            </div>
            
            <br></br>

            <div className='w-[95%] m-auto'>
                {/* <List className='grid grid-cols-2 gap-8'> */}
                <List className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    
                    {questions.map((element, index) =>(

                        <ListItem key={index} className='bg-[#FFF] rounded-[8px]'>
                            <Typography variant='h6'>{element.qes}</Typography>
                            <PlusIcon className="ml-auto"/>
                        </ListItem>
                    
                    ))}
                
                </List>
            </div>
        </div>
    </>
  )
}

export default FAQs