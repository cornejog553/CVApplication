import '../styles/PersonalDetails.css'

function PersonalDetails() {
    return(
        <div className="personalDetails-Container">
            <h1>Personal Details</h1>
            <h3>Full Name</h3>
            <input type="text"></input>

            <h3>Email</h3>
            <input type="email"></input>

            <h3>Phone Number</h3>
            <input type="text"></input>

            <h3>Address</h3>
            <input type="text"></input>
        </div>
    )
}

export default PersonalDetails