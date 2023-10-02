import { useState, useEffect } from 'react';
import { BsChevronCompactDown } from "react-icons/bs";




function Typinglogo() {
  const [part, setPart] = useState('');

  const words = [
    'Front-end,',
    'Developer.'
  ]


  let i = 0;
  let offset = 0;
  const len = words.length;
  let forwards = true;
  let skip_count = 0;
  const skip_delay = 5;
  const speed = 200;
  const wordflick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          skip_count++;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      setPart(words[i].substr(0, offset));
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
    }, speed);
  };
  useEffect(() => {
    wordflick();
  }, []);

  return (
    <>
    <section id='section_typinglogo' className='section_Typinglogo'>
    <div className='logo_main_container'> 
      <div className='h1_div'>
        <h1>console.log("Hi!🙋‍♂️")</h1>
        <h3>My name is Yute, I am a <span>{part}</span></h3>
        <div className='learn_more'>
          <a href="#aboutme">Learn more</a>
        </div>
      </div>
    </div>
    <a className='scroll_down' href="#section_vscode"><BsChevronCompactDown/></a>
    </section>
    </>
  );
}

export default Typinglogo;
