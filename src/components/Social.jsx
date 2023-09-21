
import { BsTriangleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


function Social() {
  return (
    <div>
      <section className="section_btm">
        <a className="arrow_up_top" href="#section_typinglogo"><BsTriangleFill /></a>
        <div className="btm_bar_container">
          <a href="#"><BsLinkedin /></a>
          <a href="#"><BsGithub /></a>
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsInstagram /></a>
        </div>
        <div className="line_btm">
          <p>© 2023 - Yute S. Lilitprapun</p>
        </div>
      </section>
    </div>
  )
}

export default Social
