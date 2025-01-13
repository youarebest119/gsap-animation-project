import React from 'react';
import "./About.scss";
import AboutGallery from './AboutGallery/AboutGallery';
import Banner from './Banner/Banner';
import Me from './Me/Me';
import RecentProject from './RecentProject/RecentProject';
import RecentWork from './RecentWork/RecentWork';
import Services from './Services/Services';

const About = () => {
    return (
        <>
            <Banner />
            <Me />
            <Services />
            <RecentWork />
            <RecentProject />
            <AboutGallery />
            {/* <Jungle /> */}
            <div style={{ height: "100dvh" }} />
            {/* <AboutSlider /> */}
        </>
    )
}

export default About
