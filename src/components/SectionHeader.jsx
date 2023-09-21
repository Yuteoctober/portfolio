
import { useState,useEffect } from "react";
import { useInView } from "react-intersection-observer";

function SectionHeader({ header, description}) {

  const [isVisible, setIsVisible] = useState(false);


  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.9,
  });

 
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id='section_project_new' className="section_project_header" >
        <div className={`project_header ${isVisible? 'show':''}`} ref={ref}>
          <h1 className={`project_h1 ${isVisible? 'show':''}`} ref={ref}>{header}</h1>
          <h3 className={`project_h3 ${isVisible? 'show':''}`} ref={ref}>{description}</h3>
        </div>
    </section>
  )
}

export default SectionHeader
