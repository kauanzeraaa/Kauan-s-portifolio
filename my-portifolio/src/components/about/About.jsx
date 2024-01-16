import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/CV.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about_data">
                <Info />


                <p className="p about_description">
                    I'm a Software Developer at the beginning of his career and 
                    looking to become a full-stack developer. I love studying 
                    programming and technology
                </p>

                <a download=""  href={CV} className="button button--flex">
                    Download my CV
                </a>
            </div>
        </div>
    </section>
  )
}

export default About