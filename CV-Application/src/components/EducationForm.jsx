import '../styles/PersonalDetails.css'
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react"

function EducationForm({values, setActiveSchoolForm, onRemove, setEducationIsActive,setEduList, eduList}) {

    const cancelForm = () => {
        setEducationIsActive(0)
        setActiveSchoolForm({test: "a"})
    }
    const unique_id = uuid();

    const handleSubmit = (e, values, eduList) => {
        var newEduItem = true

        e.preventDefault();
        var newEducation = {
            id: unique_id,
            school: e.target[0].value,
            degree: e.target[1].value,
            startDate: e.target[2].value,
            endDate: e.target[3].value,
            location: e.target[4].value
        }

        const nextEduList = eduList.map(edu => {
            console.log(values.id);
            if(values.id === edu.id){
                console.log("EDU ID: " +  edu.id);
                newEduItem = false
                return {
                    ...edu,
                    school: e.target[0].value,
                    degree: e.target[1].value,
                    startDate: e.target[2].value,
                    endDate: e.target[3].value,
                    location: e.target[4].value,
                  };
            } else {
                return edu
            }
        })
        if(newEduItem === false){
            setEduList(nextEduList)
            setEducationIsActive(1)
        } else {
            setEduList([...eduList, newEducation])
            setEducationIsActive(1)
        }

        setActiveSchoolForm({test: "a"})

    }
    
    return(
        <div className="education-Form-Container">
        <form onSubmit={(e) => handleSubmit(e, values, eduList)}>
            <h3>School</h3>
            <input type="text" defaultValue={values.school}></input>

            <h3>Degree</h3>
            <input type="text" defaultValue={values.degree}></input>

            <h3>Start Date</h3>
            <input type="text" defaultValue={values.startDate}></input>

            <h3>End Date</h3>
            <input type="text" defaultValue={values.endDate}></input>

            <h3>Location</h3>
            <input type="text" defaultValue={values.location}></input>
            <button type='button' onClick={()=> onRemove(values.id)}>Delete</button>
            <button onClick={()=>{cancelForm()}}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
            
        </div>
    )
}

export default EducationForm