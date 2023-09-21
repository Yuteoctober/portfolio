
import { useEffect, useState } from "react"
import todolistImg from '../Images/todoList.png'
import weatherImg from '../Images/weatherImg.png'
import WikipediaImage from '../Images/wikiscreen.png'
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

function ProjectNew() {

  const [hover, SetHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);


  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.9,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true, 
    threshold: 0.9,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true, 
    threshold: 0.9,
  });

 
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
    if (inView2) {
      setIsVisible2(true);
    }
    if (inView3) {
      setIsVisible3(true);
    }
  }, [inView,inView2,inView3]);

  return (
    <section className="section_project">
        <div className="project_one">
          <div className='image_one'>
              <div className="live_one">
                <Link to="/TodoList">
                  <span>View Project</span>
                </Link>
              </div>
            <img 
              onMouseEnter={() => SetHover(true)}
              onMouseLeave={() => SetHover(false)}
              src={todolistImg} 
              alt="todolistImg" />
          </div>
          <div className={`text_div_one ${isVisible? 'show':''}`} >
            <h1>Todo List <span>2023</span></h1>
            <p className='who_did'>by myself</p>
            <div className='btm_line_project'></div>
            <p className="p_context_one">Todo List app serves as a demonstration of strong front-end development skills using React.js. It showcases the ability to create interactive and user-friendly web applications with features that enhance task management and productivity. The code structure follows best practices and maintains clean, readable, and maintainable code. It also emphasizes a responsive design approach, making it accessible across various devices.</p>
            <div className="used_lang">
              <span>react</span>
              <span>javascript</span>
              <span ref={ref}>css</span>
            </div>
          </div>

            {/* **************** 2 *********************** */}
          <div className="image_two">
              <div className="live_two">
                <Link to="/Weather">
                  <span>View Project</span>
                </Link>
              </div>
            <img 
              onMouseEnter={() => SetHover(true)}
              onMouseLeave={() => SetHover(false)}
              src={weatherImg} 
              alt="weatherImg" />
          </div>
          <div className={`text_div_two ${isVisible2? 'show':''}`} ref={ref2}>
            <h1>Weather <span>2023</span></h1>
            <p className='who_did_two'>by myself</p>

            <div className='btm_line_project_two'></div>
            <p className="p_context_two">Weather Application using OpenWeatherMap API that allows users to check the current weather conditions for a specific location. This application is designed to provide a user-friendly interface and display essential weather information, such as temperature, weather description, maximum and minimum temperatures, humidity, wind speed, and the "feels like" temperature.</p>
            <div className="used_lang_two">
              <span>react</span>
              <span>javascript</span>
              <span>css</span>
              <span>api</span>
            </div>
          </div>

          {/* ****************** 3 ************** */}
          <div className="image_three">
              <div className="live_three">
                <Link to="/Wikipedia">
                  <span>View Project</span>
                </Link>
              </div>
            <img 
            onMouseEnter={() => SetHover(true)}
            onMouseLeave={() => SetHover(false)}
            src={WikipediaImage} 
            alt="WikipediaImage" />
          </div>
          <div className={`text_div_three ${isVisible3? 'show':''}`} ref={ref3}>
            <h1>WIKI SEARCH <span>2023</span></h1>
            <p className='who_did_three'>by myself</p>

            <div className='btm_line_project_three'></div>
            <p className="p_context_three">The "Wikipedia Search" application is a front-end web application built using React.js. It empowers users to explore Wikipedia's vast database quickly and efficiently. This application features a user-friendly interface with intuitive search capabilities including suggesting queries and number of result per page.</p>
            <div className="used_lang_three">
              <span>react</span>
              <span>javascript</span>
              <span>css</span>
              <span>api</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProjectNew