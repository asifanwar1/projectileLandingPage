import { Button, Typography, Input, ListItem, List } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FacebookIcon, InstaIcon, LinkedInIcon, MailIcon, ProjectileLogo, TwitterIcon } from '../assets/icons'

const Footer = () => {

    const [pagesLinksSet1, setPagesLinkSet1] = useState([
        {pageName: 'HomePage 1',}, {pageName: 'HomePage 2',}, {pageName: 'HomePage 3',}, {pageName: 'AboutPage 1',},
        {pageName: 'AboutPage 2',}, {pageName: 'AboutPage 3',}, {pageName: 'PricingPage 1',}, {pageName: 'PricingPage 2',},
        {pageName: 'PricingPage 3',}, {pageName: 'Pricing Ecommerce',},
    ]);
    
    const [pagesLinksSet2, setPagesLinkSet2] = useState([
        {pageName: 'Features',}, {pageName: 'Integrations',}, {pageName: 'Integrations Details',}, {pageName: 'Case Studies',},
        {pageName: 'Case Details',}, {pageName: 'Blogs',}, {pageName: 'Blolg Details',}, {pageName: 'Careers',},
        {pageName: 'Career Details',}, {pageName: 'Contact Us',},
    ]);

    const [pagesLinksSet3, setPagesLinkSet3] = useState([
        {pageName: 'Demo',}, {pageName: 'Reviews',}, {pageName: 'Downloads',}, {pageName: 'SignIn',},
        {pageName: 'SignUp',}, {pageName: '404 Page',}, {pageName: 'Protcted Page',}, {pageName: 'Style Guide',},
        {pageName: 'Changelog',}, {pageName: 'License',},
    ]);
  
    return (
    <>
        <div style={{color:'rgba(255, 255, 255, 0.70)'}} className='mt-20'>
            <div className='flex justify-center gap-20'>

                <div className='text-start mt-5'>

                    <div className='flex gap-5'>
                        <ProjectileLogo className="mt-1"/>
                        <Typography variant='h3'>Projectile</Typography>
                    </div>

                    <br></br>

                    <div>
                        <Typography>Project management software that lets you focus on leading, not micromanaging.</Typography>
                    </div>

                    <br></br>

                    <div className='flex'>
                        <MailIcon className="w-[30px] -mt-5"/>
                        <Typography>hello@projectile.com</Typography>
                    </div>

                    <br></br>
                    
                    <div>
                        <Typography>Subscribe to our weekly newsletter</Typography>
                    </div>

                    <div className="flex max-w-[20rem] border rounded-[12px] h-[3rem] bg-[#191919]">
                        <MailIcon className="-mt-[10px]"/>
                        <Input type="email" label="Email Address" className='border-none mt-3'/>
                    </div>

                    <br></br>

                    <div>
                        <Button className='bg-[#87C51E] text-black'>Subscribe</Button>
                    </div>

                </div>


                <div>
                    <List style={{color:'rgba(255, 255, 255, 0.70)'}}>
                        {pagesLinksSet1.map((element, index) =>(
                            <ListItem key={index}>
                                <Typography>{element.pageName}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </div>


                <div>
                    <List style={{color:'rgba(255, 255, 255, 0.70)'}}>
                        {pagesLinksSet2.map((element, index) =>(
                            <ListItem key={index}>
                                <Typography>{element.pageName}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </div>
                
                
                <div>
                    <List style={{color:'rgba(255, 255, 255, 0.70)'}}>
                        {pagesLinksSet3.map((element, index) =>(
                            <ListItem key={index}>
                                <Typography>{element.pageName}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </div>

            </div>



            <div className='border-2 border-[#242424] mt-2 w-[98%] m-auto'></div>


            <div className='flex gap-10 p-10'>
                <div>
                    <Typography>
                        © All rights reserved ConversionFlow. Powered by Webflow. 
                    </Typography>
                </div>

                <div className='flex ml-auto gap-10'>
                    <div className='flex bg-[#272727] w-[40px] h-[40px] justify-center rounded-[100px]'><FacebookIcon className="self-center"/></div>
                    <div className='flex bg-[#272727] w-[40px] h-[40px] justify-center rounded-[100px]'><TwitterIcon className="self-center"/></div>
                    <div className='flex bg-[#272727] w-[40px] h-[40px] justify-center rounded-[100px]'><LinkedInIcon className="self-center"/></div>
                    <div className='flex bg-[#272727] w-[40px] h-[40px] justify-center rounded-[100px]'><InstaIcon className="self-center"/></div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer