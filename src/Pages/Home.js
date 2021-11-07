import React from 'react'
import ImageText from '../Layout/ImageText'
import data from "../Data/ImageText"
import Parallax from '../Components/Parallax'
import Story from '../Components/Story'
import Information from '../Components/Information'
function Home() {

    return (
        <>
        <ImageText data={data.deserve_more}/>
        <ImageText data={data.money_matters}/>
        <Parallax/>
        <ImageText data={data.security_first}/>
        <Story/>
        <Information/>
        </>
    )
}

export default Home
