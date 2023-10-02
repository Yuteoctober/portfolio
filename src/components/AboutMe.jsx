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
            <p className="about_me_part_one"><span>Front-End</span> Developer driven by a deep passion for crafting engaging digital experiences. My journey in web development has been marked by a relentless pursuit of knowledge and an unwavering commitment to staying at the forefront of industry trends.
              With a solid foundation in core web technologies and a year of hands-on experience,
              I specialize in HTML, CSS, JavaScript, React, and React Hooks.
              </p>
              <p className="about_me_part_two">
              My expertise lies in creating captivating user interfaces 
              and seamless interactions. I've honed my skills in HTML, CSS, 
              JavaScript, React and React Hooks, allowing me to design and 
              build user-friendly web applications. My goal is to contribute 
              my creativity and technical prowess to dynamic
              web projects that engage, inform, and delight users.
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