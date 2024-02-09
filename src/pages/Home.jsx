import React from 'react'
import Header from '../componenets/Header'
import Banner from '../componenets/Banner'
import Stats from '../componenets/Stats'
import AdLayer from '../componenets/AdLayer'
import WorkLayer from '../componenets/WorkLayer'
import WorkSecondLayer from '../componenets/WorkSecondLayer'
import Testimonials from '../componenets/Testimonials'
import Integrations from '../componenets/Integrations'
import FAQs from '../componenets/FAQs'
import ContactUs from '../componenets/ContactUs'
import Footer from '../componenets/Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <Stats/>
        <AdLayer/>
        <WorkLayer/>
        <WorkSecondLayer/>
        <div className='bg-[#F0F0F0]'>
        <Testimonials/>
        <Integrations/>
        <FAQs/>
        <ContactUs/>
        </div>
        <Footer/>
    </>
  )
}

export default Home