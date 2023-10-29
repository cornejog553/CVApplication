import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
import Resume from "./components/Resume"
import { useState } from "react"

const userProfile = {
    name: "Giovanni Cornejo",
    email: "cornejog553@gmail.com",
    phone: "123456789",
    address: "12345 5th Ave, New York, NY"
}

function App() {
    const [values, setValues] = useState(userProfile);
    function handleChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
      }

    return (
            <div className="container">
                <div>
                    <PersonalDetails 
                    userprofile={userProfile}
                    values={values}
                    setValues={handleChange}
                    />
                    <Education />
                    <WorkExperience />
                </div>
                
                <div>
                    <Resume
                    values={values}
                    setValues={handleChange}
                    ></Resume>
                </div>
            </div>
    )
}

export default App