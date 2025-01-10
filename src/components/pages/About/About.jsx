import React from 'react';
import "./About.scss";
import Banner from './Banner/Banner';
import Me from './Me/Me';
import AboutSlider from './AboutSlider/AboutSlider';
import Services from './Services/Services';
import RecentWork from './RecentWork/RecentWork';
import RecentProject from './RecentProject/RecentProject';

const About = () => {
    return (
        <>
            <Banner />
            <Me />
            <Services />
            <RecentWork />
            <RecentProject />
            {/* <AboutSlider /> */}
            <div style={{ height: "100dvh" }} />
        </>
    )
}

export default About
