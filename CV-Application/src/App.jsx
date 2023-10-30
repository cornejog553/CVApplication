import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
import Resume from "./components/Resume"
import { useState } from "react"

const userProfile = {
    name: "Giovanni Cornejo",
    email: "cornejog553@gmail.com",
    phone: "123456789",
    address: "12345 5th Ave, New York, NY",
    education: [{
        school: "Cal Poly Pomona",
        degree: "Computer Information System",
        location: "Pomona, CA",
        startDate: "08/2016",
        endDate: "06/2018"
    },
    {
        school: "Saddleback College",
        degree: "General Education",
        location: "Mission Viejo, CA",
        startDate: "06/2009",
        endDate: "06/2016"
    }
    ],
    experience: [{
        company: "Umbrella Inc.",
        position: "UX & UI Designer",
        description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        location: "Irvine, CA",
        startDate: "08/2016",
        endDate: "06/2018"
    },
    {
        company: "Goodleap",
        position: "Application Support Engineer",
        description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        location: "Irvine, CA",
        startDate: "08/2016",
        endDate: "06/2018"
    }
    ]
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