
import { BiMailSend } from "react-icons/bi";

function ContactMe() {
  return (
    <section className="contact_me">
        <h4>Did you like my work?</h4>
        <p>Shoot me an email :)</p>
        <a href="mailto: yudthsoponvit@gmail.com"><BiMailSend className="email_me" /></a>
    </section>
  )
}

export default ContactMe
