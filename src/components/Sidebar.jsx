import { useState} from 'react';
import { BsList } from 'react-icons/bs'
import { BiSolidArrowToRight } from 'react-icons/bi'
import { BiBook } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";





function Sidebar() {
    const [show, setShow] = useState(false)
  
    return (
        <>
        <div className='container_nav'>
          <div className='container_list'
          onClick={() => setShow(!show)}
          >
            {!show? (
            <BsList className='list'/>
            ) : (
              <div className='listx_div'><BiSolidArrowToRight className='list_x'/></div>
            ) }     
          </div>
          <div id='side_bar'
            className={`side_tap ${show? 'show' : 'hide'}`}>
            <div className='link_sidetap'>
            <div className="linebreak_side_tap"></div>
              <div className='link'><a className='link_home' href='#section_typinglogo'><BiHome className='sidetap_home'/><span>Home</span></a></div>
              <div className='link'><a className='link_three' href="#section_vscode"><BiBook className='sidetap_project'/><span>Skill</span></a></div>
              <div className='link'><a className='link_three' href="#aboutme"><BiUser className='sidetap_home'/><span>About</span></a></div>
              <div className='link'><a className='link_three' href="#section_project_new"><BiGridAlt className='sidetap_project'/><span>Project</span></a></div>       
            </div>
          </div>         
        </div>
        </>
    )}

export default Sidebar