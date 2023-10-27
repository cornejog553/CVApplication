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
    const [name, setName] = useState(userProfile.name);

    return (
            <div className="container">
                <div>
                    <PersonalDetails 
                    userprofile={userProfile}
                    name={name}
                    onChange={(event)=> setName(event.target.value)}
                    />
                    <Education />
                    <WorkExperience />
                </div>
                
                <div>
                    <Resume name={name}></Resume>
                </div>
            </div>
    )
}

export default App