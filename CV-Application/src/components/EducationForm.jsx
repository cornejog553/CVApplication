import '../styles/PersonalDetails.css'
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react"

function EducationForm({values, setActiveSchoolForm, onRemove, setEducationIsActive,setEduList, eduList}) {

    const cancelForm = () => {
        setEducationIsActive(0)
        setActiveSchoolForm({test: "a"})
    }
    const unique_id = uuid();

    const handleSubmit = (e) => {
        e.preventDefault();
        var newEducation = {
            id: unique_id,
            school: e.target[0].value,
            degree: e.target[1].value,
            location: e.target[2].value,
            startDate: e.target[3].value,
            endDate: e.target[4].value
        }
        // eduList.push(newEducation)
        setEduList([...eduList, newEducation])
        setEducationIsActive(1)
    }
    
    return(
        <div className="education-Form-Container">
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>School</h3>
            <input type="text" placeholder={values.school}></input>

            <h3>Degree</h3>
            <input type="text" placeholder={values.degree}></input>

            <h3>Start Date</h3>
            <input type="text" placeholder={values.startDate}></input>

            <h3>End Date</h3>
            <input type="text" placeholder={values.endDate}></input>

            <h3>Location</h3>
            <input type="text" placeholder={values.location}></input>
            <button type='button' onClick={()=> onRemove(values.id)}>Delete</button>
            <button onClick={()=>{cancelForm()}}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
            
        </div>
    )
}

export default EducationForm