
import { useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import ImgSlide3 from '../Images/slide1.png'
import weatherImg from '../Images/weatherImg.png'
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';
import todoListImg from '../Images/todoList.png'




function Slide() {

    const [isVisivle, setIsVisible] = useState(false)

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.25,
    })

    useEffect(()=> {
      if(inView) {
        setIsVisible(true)
      }
    }, [inView]) 

    const [slide, setSlide] = useState(0)

    const data = [
    {
        src: todoListImg,
        alt: 'pic 1'
    },
    {
        src: weatherImg,
        alt: 'pic 2'
    },
    {
        src: ImgSlide3,
        alt: 'pic 3'
    },
    ]

    const descriptionContainer = [
        {
            key: 0,
            header: 'Todo List',
            context1: 'This Todo List application serves as a demonstration of strong front-end development skills using React.js. It showcases the ability to create interactive and user-friendly web applications with features that enhance task management and productivity. The code structure follows best practices and maintains clean, readable, and maintainable code. It also emphasizes a responsive design approach, making it accessible across various devices.',
            feature: 'Feature:',
            fea1: 'Task Management: ',
            span1: 'Add, edit and delete fuction.',
            fea2: 'Drag-and-Drop: ',
            span2: 'Prioritize tasks by dragg and drop.',
            fea3: 'Edit Mode: ',
            span3: 'Modify task names with a click.',
            fea4: 'Clear All: ',
            span4: 'Remove all tasks at once.',
            fea5: 'Date Display: ',
            span5: 'Shows the current date.',
            link: 'TodoList'
        },
        {
            key: 1,
            header: 'Weather App',
            context1: 'Weather Application using OpenWeatherMap API that allows users to check the current weather conditions for a specific location. This application is designed to provide a user-friendly interface and display essential weather information, such as temperature, weather description, maximum and minimum temperatures, humidity, wind speed, and the "feels like" temperature.',
            feature: 'Feature:',
            fea1: 'Location-Based: ',
            span1: 'Fetch current condition by city.',
            fea2: 'Data Display: ',
            span2: 'Fetch data from OpenWeatherMap API.',
            fea3: 'Weather Icons: ',
            span3: 'Diplay current weather condition.',
            link: 'Weather'
        },
        {
            key: 2,
            header: 'dfgdfgddfdddddddddddddddg',
            context1: 'This Todo List application serves as a demonstration of strong front-end development skills using React.js. It showcases the ability to create interactive and user-friendly web applications with features that enhance task management and productivity. The code structure follows best practices and maintains clean, readable, and maintainable code. It also emphasizes a responsive design approach, making it accessible across various devices.',
            feature: 'Feature:',
            fea1: 'Task Management: Easily add, edit, complete, and delete tasks.',
        },
      
        ]
        
            const handleNext = () => {
                setSlide(slide === data.length - 1? 0 : slide + 1)
            }
    
            const handlePrev = () => { // arrowleft prev
             setSlide(slide === 0? data.length - 1 : slide - 1 )
         }
    
            const handleIbdicator = (index) => { // indicator dots function
             setSlide(index)
         }
    
          useEffect(() => {
             const handleTimeout = () => {
                  setSlide(slide === data.length - 1? 0 : slide + 1)
    
                  setTimeout(handleTimeout, 50000)
             }
    
             const timeoutId = setTimeout(handleTimeout, 50000)
    
             return () => {
                    clearTimeout(timeoutId)
             }
          },[slide])

    return (
        <>
          <section id="section_project" className="section_project">
            <div className={`slide_container ${isVisivle? 'show':''}`} ref={ref}>
                <h1>My Projects</h1>
                <BiChevronLeft className='arrow arrow_left' onClick={handlePrev}/>
                    {data.map((item,index) => (
                        <img className={slide === index? 'slide':'slide-hidden'} src={item.src} alt={item.alt} key={index}/>
                    ))}
                <BiChevronRight className='arrow arrow_right' onClick={handleNext}/>
                <span className='indicators'>
                    {data.map((_, index) => (
                        <button className={slide === index? 'indicator': 'indicator indicator-inactive'} key={index} onClick={() => handleIbdicator(index)}></button>
                    ))}
                </span>
            </div>
                {descriptionContainer.map((item, index) => (
                    <>
                    {slide === item.key && (
                    <div key={item.key} className={`description_container ${isVisivle? 'show':''}`} ref={ref}>
                        <h1>{item.header}</h1>
                        <p>{item.context1}</p>
                        <h2>{item.feature}</h2>
                        <h3>{item.fea1}
                            <span>{item.span1}</span>
                        </h3>
                        <h3>{item.fea2}
                            <span>{item.span2}</span>
                        </h3>
                        <h3>{item.fea3}
                            <span>{item.span3}</span>
                        </h3>
                        <h3>{item.fea4}
                            <span>{item.span4}</span>
                        </h3>
                        <h3>{item.fea5}
                            <span>{item.span5}</span>
                        </h3>
                        <div className="project_one_btn">
                            <Link className='link_project' to={item.link}><span>Try it!</span></Link>
                        </div>
                    </div>  
                    )}
                    </>
                ))}

                
          </section>
        </>
    );
}

export default Slide;
