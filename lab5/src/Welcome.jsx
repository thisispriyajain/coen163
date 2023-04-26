import Nav from './Nav'
import './Welcome.css'

function Welcome() {
  return (
	<>
	<Nav/>
	<h1> Know Your Waste </h1>
    <form>
		<div className="container">
			<h2>Welcome</h2>
		    <label htmlFor="uname"><b>Username</b></label>
		    <input type="text" placeholder="Enter Username" name="uname" required/>

		    <label htmlFor="psw"><b>Password</b></label>
		    <input type="password" placeholder="Enter Password" name="psw" required/>

		    <button type="submit">Login</button>
		    <label> Remember me </label>
            <input type="checkbox" name="remember" />
  		</div>

  		<div className="container">
	      <button type="button" className="cancel">Cancel</button>
    	</div>
  	</form>
	</>
  )
}

export default Welcome