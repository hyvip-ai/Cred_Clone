import React from 'react'
import ImageText from '../Layout/ImageText'
import data from "../Data/ImageText"
import Parallax from '../Components/Parallax'
import Story from '../Components/Story'
import Information from '../Components/Information'
import Banner from '../Components/Banner'
import Rewards from '../Components/Rewards'
import Footer from '../Components/Footer'
import Rating from '../Components/Rating'
function Home() {

    return (
        <>
        <Banner/>
        <ImageText data={data.deserve_more}/>
        <Rewards/>
        <ImageText data={data.money_matters}/>
        <Parallax/>
        <ImageText data={data.security_first}/>
        <Story/>
        <Rating />
        <Information/>
        <Footer/>
        </>
    )
}

export default Home
