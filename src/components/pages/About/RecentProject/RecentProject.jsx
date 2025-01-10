import React from 'react'
import work from "../../../../assets/images/recent-work-long-image.webp";
import "./RecentProject.scss";
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';

const RecentProject = () => {
    useGSAP(() => {
        
    })
    return (
        <section className="recent_project_design">
            <Container>
                <h3>TECHNIS</h3>
                <div className='recent_project_image'>
                    <img src={work} alt="work" />
                </div>
                <h2>
                    <div>intuitive <span>intuitive</span></div>
                    <div>ux <span>ux</span></div>
                    <div>prolongs <span>prolongs</span></div>
                    <div>user stay. <span>user stay.</span></div>
                </h2>
            </Container>
        </section>
    )
}

export default RecentProject
