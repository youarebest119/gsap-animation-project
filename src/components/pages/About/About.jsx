import React from 'react';
import "./About.scss";
import AboutGallery from './AboutGallery/AboutGallery';
import Banner from './Banner/Banner';
import Me from './Me/Me';
import RecentProject from './RecentProject/RecentProject';
import RecentWork from './RecentWork/RecentWork';
import Services from './Services/Services';
import CyberConvoy from './CyberConvoy/CyberConvoy';

const About = () => {
    return (
        <>
            <Banner />
            <Me />
            <Services />
            <RecentWork />
            <RecentProject />
            <AboutGallery />
            {/* <div style={{ height: "50dvh", border: "2px solid white" }} /> */}
            <CyberConvoy />
            {/* <Jungle /> */}
            <div style={{ height: "100dvh" , border: "2px solid white"}} />
            {/* <AboutSlider /> */}
        </>
    )
}

export default About
