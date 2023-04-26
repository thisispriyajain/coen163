import Nav from './Nav'
import './Info.css'

function Info() {
  return (
	<>
	<Nav/>
	<h3> Information Page </h3>
    <section>
    <h4> Type of Waste Management </h4>
    <p> I would like to use this web application to teach people about sorting food waste. If not sorted properly, waste can accumulate in landfills and have harmful effects on our environment. </p>
    </section>
    <section>
    <h4>Audience of Web Application</h4>
    <p>The users of this web application is the general public, especially for those who have not learned about sorting food waste. </p>
    </section>

    <section>
    <h4>Sources</h4>
    <a href="https://www.california.com/how-to-sort-trash-california/"> The Californian's Guide to Properly Sorting Trash </a><br/>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL8VX79RNie0yMZbxm7PWu36wcScti7IUCJ2gKLCxoLOFZqQ/viewform"> Cupertino Waste Sorting Challenge </a><br/>
    <a href="https://www.scu.edu/sustainability/operations/waste/">Stop Waste</a> <br/>
    </section>

    <img src="https://www.ocf.berkeley.edu/~rsp/wp-content/uploads/2020/07/Waste-Sorting-scaled.jpg" width="600" height="500" alt="Sort Waste Correctly"></img>
	</>
  )
}

export default Info