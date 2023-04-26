import Nav from './Nav'
import './Contact.css'

function Contact() {
  return (
	<>
	<Nav/>
    <div className='container'>
	<h2>Contact Us</h2>
    <p>We'd love to hear from you.</p>
    <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname"/>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname"/>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject"/>
    <input type="submit" value="Submit"/>
  	</form>
    </div>
	</>
  )
}

export default Contact