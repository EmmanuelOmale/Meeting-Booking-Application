import Navbar from "../components/NavBar"
import Form from "../components/Form"


const Meeting = () => {
    return(
        <div className="meeting-container">
            <Navbar />
            <h2>Schedule a meet up with calender</h2>
            <Form />
        </div>
    )
}

export default Meeting;