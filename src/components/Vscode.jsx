import { useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import reduxIcon from '../Images/redux.png'
import githubIcon from '../Images/github.png'
import jsIcon from '../Images/icons8-js.svg'
import reactIconvs from '../Images/React-icon.svg.png'
import htmlIconvs from '../Images/html_1532556.png'
import cssIconvs from '../Images/css_1532556.png'
import cssIcon from '../Images/css.png'
import htmlIcon from '../Images/html.png'



function Vscode() {
  const [show, setShow] = useState({
    react: true,
    html: false,
    css: false,
  })

  const [isVisible, setIsVisible] = useState(false);

  // Use the useInView hook to observe the .skills element
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the callback once
    threshold: 0.3,
  });

  // Use useEffect to update the isVisible state when inView changes
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <section id='section_vscode' className='section_vscode'ref={ref}>
        {/* ********************* SKILLS ******************************** */}
        <div className={`skills ${isVisible ? 'show' : ''}`}>
          <h1>MY SKILLS</h1>

        <div className={`skills_container ${isVisible? 'show': ''}`}>
            <div className='js_skill'>
                <img src={jsIcon} alt="jsIcon" />
                <p>javascript</p>
            </div>          

            <div className='html_skill'>
                <img src={htmlIcon} alt="htmlIcon" />
                <p>html</p>
            </div>

            <div className='css_skill'>
                <img src={cssIcon} alt="cssIcon" />
                <p>css</p>
            </div>

            <div className='react_skill'>
                <img src={reactIconvs} alt="reactIcon" />
                <p>react</p>
            </div> 

            <div className='redux_skill'>
                <img src={reduxIcon} alt="reduxIcon" />
                <p>redux</p>
            </div>

            <div className='github_skill'>
                <img src={githubIcon} alt="githubIcon" />
                <p>github</p>
            </div>

            </div>
        </div>

{/* ********************* SKILLS END ******************************** */}

      <div className={`vs_container ${isVisible ?'show' : ''}`} ref={ref}>
        <div className='green'></div>
        <div className='yellow'></div>
        <div className='red'></div>

{/* ******************** REACT ************************** */}
        <div className={show.react? 'react show' : 'react'}
          onClick={() => setShow({...show, react: true, html: false, css: false})}
          ><span>&nbsp;react</span>
          <img src={reactIconvs} alt="reactIcon" />
        <div 
          className={show.react? 'react_sub show' : 'react_sub'}>
          {show.react && (
            <>
            <p className='react_p'>
              <span className='num'>1</span> import 
              <span className='bracket'> './App.css' 
              <span className='end'>;</span></span>
            </p>

            <p className='react_p'>
              <span className='num'>3</span> import 
              <span className='usestate'> Nav</span> from 
              <span className='bracket'> './components/Nav' 
              <span className='end'>;</span></span>
            </p>

            <p className='react_p'>
              <span className='num'>2</span> import 
              <span className='bracket'> &#123; 
              <span className='usestate'> useState, useEffect</span> &#125;</span> from 
              <span className='bracket'> 'react' 
              <span className='end'>;</span></span>
            </p>
            
            </>
            )}
          </div>
        </div>

{/* ******************** HTML ************************** */}
        <div className={show.html? 'html show' : 'html'}
          onClick={() => setShow({...show, html: true, react: false, css: false})}
          ><span>&nbsp;html</span>
          <img src={htmlIconvs} alt="reactIcon" />
        <div 
          className={show.html? 'html_sub show' : 'html_sub'}>
          {show.html && (
            <>
              <p className='html_p'><span className='num'>1</span>&lt;<span className='element'>div</span>&gt;
              <br />
              <span className='num'>2&nbsp;&nbsp;&nbsp;</span>&lt;<span className='element'>h1</span> <span className='class'>class='header'</span>&gt;
                <br />
                <span className='num'>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Welcome to my portfolio
                <br />
                <span className='num'>4&nbsp;&nbsp;&nbsp;</span>&lt;/<span className='element'>h1</span>&gt;
              <br />
              <span className='num'>5&nbsp;&nbsp;&nbsp;&nbsp;</span>&lt;<span className='element'>p </span><span className='class'>class='text'</span>&gt;
              <br />
              <span className='num'>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>I am Front-end developer based in New York City
                <br />
                <span className='num'>7&nbsp;&nbsp;&nbsp;&nbsp;</span>&lt;/<span className='element'>p</span>&gt;
              <br />
              <span className='num'>8</span>&lt;/<span className='element'>div</span>&gt;
              </p>

            </>
          )}
          </div>
        </div>

{/* ******************** CSS ************************** */}
        <div className={show.css? 'css show' : 'css'}
          onClick={() => setShow({...show, css: true, react: false, html: false})}
          ><span>&nbsp;css</span>
          <img src={cssIconvs} alt="reactIcon" />
        <div 
          className={show.css? 'css_sub show' : 'css_sub'}>
          {show.css && (
            <p><span className='num3'>1</span>.<span className='header_green'>header</span><span className='bracket_css'> &#123;</span>
              <br />
              <span className='num3'>2</span>
              <span className='inner_css'>&nbsp;&nbsp;&nbsp;&nbsp;font-size</span>: 25px;
              <br />
              <span className='num3'>3</span>
              <span className='inner_css'>&nbsp;&nbsp;&nbsp;&nbsp;color</span>: #859af9;
              <br />
              <span className='num3'>4</span>
              <span className='inner_css'>&nbsp;&nbsp;&nbsp;&nbsp;letter-spacing</span>: 1px;
              <br />
              <span className='num3'>5</span>
              <span className='bracket_css'>&#125;</span> 
              <br />
              <span className='num3'>6</span>
              <br />
              <span className='num3'>7</span>
              <span className='header_green'>div p</span><span className='bracket_css'> &#123;</span>
              <br />
              <span className='num3'>8</span>
              <span className='inner_css'>&nbsp;&nbsp;&nbsp;&nbsp;font-family</span>: 'Courier New', Courier, monospace;
              <br />
              <span className='num3'>9</span>
              <span className='inner_css'>&nbsp;&nbsp;&nbsp;&nbsp;font-size</span>: 15px;
              <br />
              <span className='num3'>10</span>
              <span className='inner_css3'>&nbsp;&nbsp;&nbsp;&nbsp;color</span>: #ffffff;
              <br />
              <span className='num3'>11</span>
              <span className='bracket_css3'>&#125;</span> 
            </p>
          )}
          </div>
        </div>

      </div>
      </section>
    </>
  );
}

export default Vscode;

