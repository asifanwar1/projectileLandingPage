import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import {  HalfCircleIcon, LeftArrowIcon, RightArrowIcon } from "../assets/icons";
import { CardImage, CardImage2 } from '../assets/images'   


const ProductivityCard = () => {
    return (
        <div className="p-8 bg-[#EDEDED] rounded-[14px]">
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} >
          <div className="flex">
                <LeftArrowIcon className="mr-auto"/>
                <Typography className="justify-center">17 April (Today)</Typography>
                <RightArrowIcon className="ml-auto"/>
          </div>
        </CardHeader>
        <br></br>
        <CardBody>
            <div>
                <HalfCircleIcon className="m-auto"/>
                <div className="-mt-12">
                    <Typography variant="h3">55%</Typography>
                    <Typography>Productivity</Typography>
                </div>
            </div>
        </CardBody>
        <br></br>
        <CardFooter className="pt-0">
            <div className="bg-[#EDEDED] w-[250px] p-5 rounded-[12px] m-auto">
                <Typography>You have already make a significant improve on your productivity using Projectile.</Typography>
            </div>
        </CardFooter>
      </Card>
      </div>
    );
}




const TransparnetlyCard = () => {
    return (
        <div className="p-8 bg-[#EDEDED] rounded-[14px]">
      <Card className="w-96">
        <CardBody>
            <div>
                <img src={CardImage} alt="CardImage"/>
            </div>
        </CardBody>
      </Card>
      </div>
    );
}



const WorkFasterCard = () => {
    return (
        <div className="p-8 bg-[#EDEDED] rounded-[14px]">
      <Card className="w-96">
        <CardBody >
            <div >
                <img src={CardImage2} alt="CardImage2" />
            </div>
        </CardBody>
      </Card>
      </div>
    );
}

export { ProductivityCard, TransparnetlyCard, WorkFasterCard}