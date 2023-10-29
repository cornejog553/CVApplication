import '../styles/PersonalDetails.css'

function PersonalDetails({setValues}) {

    return(
        <div className="personalDetails-Container">
            <h1>Personal Details</h1>
            <h3>Full Name</h3>
            <input 
            type="text"
            name="name"
            onChange={setValues}
            >
            </input>

            <h3>Email</h3>
            <input
            type="email"
            name="email"
            onChange={setValues}
            ></input>

            <h3>Phone Number</h3>
            <input 
            type="text"
            name="phone"
            onChange={setValues}
            ></input>

            <h3>Address</h3>
            <input
            type="text"
            name='address'
            onChange={setValues}></input>
        </div>
    )
}

export default PersonalDetails