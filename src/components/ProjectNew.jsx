
import { useEffect, useState } from "react"
import todolistImg from '../Images/todoList.png'
import weatherImg from '../Images/weatherImg.png'
import WikipediaImage from '../Images/wikiscreen.png'
import typingGame from '../Images/typing_game.png'
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import signin from '../Images/login.png'

function ProjectNew() {

  const [hover, SetHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);


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
  const { ref: ref4, inView: inView4 } = useInView({
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
    if (inView4) {
      setIsVisible4(true);
    }
  }, [inView,inView2,inView3,inView4]);

  return (
    <section className="section_project">
        <div className="project_one">
          <div className='image_one'>
              <div className="live_one">
                <Link to="/TodoList" target="_blank" rel="noopener noreferrer">
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
            <h1>Todo List</h1>
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
                <Link to="/Weather" target="_blank" rel="noopener noreferrer">
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
            <h1>Weather</h1>
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
              <div className="live_three" >
                <Link to="/Wikipedia" target="_blank" rel="noopener noreferrer">
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
            <h1>WIKI SEARCH</h1>
            <div className='btm_line_project_three'></div>
            <p className="p_context_three">The "Wikipedia Search" application is a front-end web application built using React.js. It empowers users to explore Wikipedia's vast database quickly and efficiently. This application features a user-friendly interface with intuitive search capabilities including suggesting queries and number of result per page.</p>
            <div className="used_lang_three">
              <span>react</span>
              <span>javascript</span>
              <span>css</span>
              <span>api</span>
            </div>
          </div>
          {/* **************** 4 *********************** */}
          <div className="image_four">
              <div className="live_four">
                  <a href='https://yuteoctober.github.io/typingGame/' target="_blank" rel="noreferrer">View Project</a>
              </div>
            <img 
              onMouseEnter={() => SetHover(true)}
              onMouseLeave={() => SetHover(false)}
              src={typingGame} 
              alt="typingGame" />
          </div>
          <div className={`text_div_four ${isVisible4? 'show':''}`} ref={ref4}>
            <h1>Typing Practice</h1>
            <div className='btm_line_project_four'></div>
            <p className="p_context_four">TypeIsFun is an interactive typing practice application designed to enhance your typing skills. It offers a range of features, including timed challenges, dynamic themes, and result analysis. Enjoy a seamless typing experience and share your achievements on Twitter.</p>
            <div className="used_lang_four">
              <span>react</span>
              <span>javascript</span>
              <span>css</span>
              <span>api</span>
            </div>
          </div>

          {/* ****************** 5 ************** */}
          <div className="image_five">
              <div className="live_five" >
                <Link to="/SignIn" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                </Link>
              </div>
            <img 
            onMouseEnter={() => SetHover(true)}
            onMouseLeave={() => SetHover(false)}
            src={signin} 
            alt="signin" />
          </div>
          <div className={`text_div_five ${isVisible3? 'show':''}`} ref={ref3}>
            <h1>User-Authentication</h1>
            <div className='btm_line_project_five'></div>
            <p className="p_context_five">User Authentication system built with React and Firebase. This project caters to a wide array of user needs, providing the functionality to sign in, register new accounts, reset forgotten passwords, and even offers the convenience of Google-based authentication.</p>
            <div className="used_lang_five">
              <span>react</span>
              <span>js</span>
              <span>css</span>
              <span>Firebase</span>
              <span>Authentication</span>
            </div>
          </div>

        </div>
      </section>
  )
}

export default ProjectNew
