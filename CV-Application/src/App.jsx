import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import Resume from "./components/Resume"

function App() {
    return (
            <div className="container">
                <div>
                    <PersonalDetails />
                    <Education />
                </div>
                
                <div>
                    <Resume></Resume>
                </div>
            </div>
    )
}

export default App