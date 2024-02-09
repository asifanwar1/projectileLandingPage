import { Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import {GoogleLogoImage, YoutubeLogoImage, DiscordLogoImage, ALogoImage,
        SaleForceLogoImage, AppleLogoImage, FigmaLogoImage, MailLogoImage,
        IconLogoImage, MasterCardLogoImage, ShopifyLogoImage, PaypalLogoImage,
        KLogoImage, Icon4LogoImage, DropBoxLogoImage, WLogoImage, Icon3LogoImage,
        Icon2LogoImage, VisaLogoImage, SquareLogoImage, AmazonLogoImage,} from '../assets/images'

const Integrations = () => {

    const [logos, setLogos] = useState([
        {logoName: GoogleLogoImage, bgColor: '#FFF', logoWidth: '119px',},
        {logoName: YoutubeLogoImage, bgColor: '#FFF', logoWidth: '150px',},
        {logoName: DiscordLogoImage, bgColor: '#FFF', logoWidth: '158px',},
        {logoName: SaleForceLogoImage, bgColor: '#FFF',  logoWidth: '125px',},
        {logoName: ALogoImage, bgColor: '#FFE01B', logoWidth: '150px',},
        {logoName: AppleLogoImage, bgColor: '#00000A', logoWidth: '150px',},
        {logoName: FigmaLogoImage, bgColor: '#FFF', logoWidth: '150px',},
        {logoName: MailLogoImage, bgColor: '#FFF', logoWidth: '179px',},
        {logoName: GoogleLogoImage, bgColor: '#FFF', logoWidth: '119px',},
        {logoName: IconLogoImage, bgColor: '#FFF', logoWidth: '162px',},
        {logoName: MasterCardLogoImage, bgColor: '#00000A', logoWidth: '136px',},
        {logoName: ShopifyLogoImage, bgColor: '#96BF48', logoWidth: '136px',},
        {logoName: PaypalLogoImage, bgColor: '#FFF', logoWidth: '162px',},
        {logoName: KLogoImage, bgColor: '#FFF', logoWidth: '136px',},
        {logoName: Icon4LogoImage, bgColor: '#FF7A59', logoWidth: '150px',},
        {logoName: DropBoxLogoImage, bgColor: '#FFF', logoWidth: '145px',},
        {logoName: WLogoImage, bgColor: '#FFF', logoWidth: '185px',},
        {logoName: DropBoxLogoImage, bgColor: '#FFF', logoWidth: '135px',},
        {logoName: Icon3LogoImage, bgColor: '#FFF', logoWidth: '125px',},
        {logoName: Icon2LogoImage, bgColor: '#FF4A00', logoWidth: '150px',},
        {logoName: WLogoImage, bgColor: '#FFF', logoWidth: '150px',},
        {logoName: Icon3LogoImage, bgColor: '#FFF', logoWidth: '125px',},
        {logoName: VisaLogoImage, bgColor: '#00579F', logoWidth: '150px',},
        {logoName: SquareLogoImage, bgColor: '#FFF', logoWidth: '135px',},
        {logoName: AmazonLogoImage, bgColor: '#231F20', logoWidth: '120px',},
        {logoName: DiscordLogoImage, bgColor: '#FFF', logoWidth: '150px',},
    ])

  return (
    <>
        
        <div className='mt-40 bg-[#F0F0F0] text-black'>
            <div className='text-center p-5'>

                <div className='flex bg-[#67D6FA] text-black p-1 justify-center rounded-[100px] w-[200px] m-auto'>
                    <Typography className='text-[14px]'>WORK EFFICENTLY</Typography>
                </div>

                <br></br>
                
                <div>
                    <Typography variant='h1'>Get more value from your</Typography>
                    <Typography variant='h1'>tools with integrations</Typography>
                </div>
            </div>

            <br></br>

            <div className='flex flex-wrap gap-8 w-[99%] m-auto justify-center'>
                {logos.map((element, index) =>(
                    <div key={index} className="flex justify-center p-2" style={{width: element.logoWidth, height: element.logoWidth, backgroundColor: element.bgColor, borderRadius: '100%', }}>
                        <img src={element.logoName} alt={element.logoName} className='self-center'/>
                    </div>
                ))}
            </div>
        </div>
       
    </>
  )
}

export default Integrations