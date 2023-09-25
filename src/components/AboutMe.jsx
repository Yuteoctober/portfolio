import { useState,useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AboutMe() {

    const [isVisivle, setIsVisible] = useState(false)

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.6,
    })

    useEffect(()=> {
      if(inView) {
        setIsVisible(true)
      }
    }, [inView]) 
  
    return (
      <>
        <section id="aboutme" className="section_about_me">
          <div className="grey_bg"></div>    
          <div className={`aboutme_container ${isVisivle? 'show':''}`} ref={ref}>
             <h1 className="head_about_me">ABOUT ME</h1>
            <p className="about_me_part_one">Driven and self-taught Front-End Web Developer with a passion 
              for crafting immersive and user-friendly digital experiences. 
              With a solid year of dedicated learning and hands-on experience,
              I have honed my skills in HTML, CSS, JavaScript, React, and Redux.
              My journey into web development has been marked by a relentless
              pursuit of knowledge and a commitment to staying at the forefront 
              of industry trends. I am eager to leverage my skills and creativity 
              to contribute to dynamic web projects that engage, inform,
              and delight users.
              </p>
              <p className="about_me_part_two">
              With a strong foundation in the core technologies of web development 
              and a continuous thirst for improvement, I am ready to take on new 
              challenges and create captivating digital solutions that leave a lasting 
              impression. I am excited to be part of the ever-evolving world of web 
              development, where innovation and creativity intersect, 
              and where my skills can make a meaningful impact.
              </p>
          </div>
          <a className="resume_a" href="https://drive.google.com/file/d/1XNn23UA2L82P2__Ccuccl3WMdR2rHG57/view?usp=sharing">
            <button className="cv">My Resume</button>
          </a>
        </section>
      </>
    );
  }
  
  export default AboutMe;