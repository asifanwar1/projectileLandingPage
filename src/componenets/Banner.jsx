import React from 'react'
import { Typography, Input, Button } from '@material-tailwind/react'
import { BannerImage, PhoneImage } from '../assets/images/index'
import { RatingsIcon } from '../assets/icons';


const Banner = () => {

    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

  return (
    <>
        <div className='bg-black'>
        <div className='flex text-[#FFFFFF] mt-[5%] ml-[7%] relative'>
            
            <div>
                
                <div className='flex bg-[#FFD978] text-black w-[15rem] justify-center rounded-[100px]'>
                    <Typography>Best Project Managment Tool</Typography>
                </div>
                <br></br>
                <div>
                    <Typography className='text-[80px] font-[700] leading-[80px]'>Manage all</Typography>
                    <Typography className='text-[80px] font-[700] leading-[80px]'>Your Projects</Typography>
                    <Typography className='text-[80px] font-[700] leading-[80px]'>in one place</Typography>
                </div>
                <br></br>
                <div className='flex w-[519px]'>
                    <Typography className='font-[18px]'>
                        View plans, track progress, increase productivity and improve communication with Projectile.
                    </Typography>
                </div>
                <br></br>
                <div>
                    <div className="relative flex w-full max-w-[24rem]">
                        <Input type="email" label="Email Address"
                            value={email}
                            onChange={onChange}
                            className="pr-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <Button
                            size="sm"
                            color={email ? "gray" : "blue-gray"}
                            disabled={!email}
                            className="!absolute right-1 top-1 rounded"
                        >
                            Invite
                        </Button>
                    </div>
                    <br></br>
                    <div>
                        <RatingsIcon/>
                    </div>
                    <br></br>
                    <div className='flex w-[450px]'>
                        <Typography className='font-[18px]'>
                            "Easily the best project management software on the market, right now.”
                        </Typography>
                    </div>
                    <br></br>
                    <div className='flex w-[150px]'>
                    <Typography className='font-[18px]'>
                        Daniel Henry - Web Designer
                    </Typography>
                    </div>
                </div>
            </div>




            <div className='flex relative ml-auto w-[600px]'>
                <div className='absolute right-0'>
                    <img src={BannerImage} alt='banner' className='w-[500px]'/>
                </div>
                <div className='absolute z-10 bottom-0 -left-[10%]'>
                    <img src={PhoneImage} alt='phoneImage' className='w-[250px]'/>
                </div>
            </div>
        </div>
        <br></br>
        </div>
    </>
  )
}

export default Banner