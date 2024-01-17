import '../styles/PersonalDetails.css'
import { useEffect, useState } from "react"

function EducationForm({values, onRemove, setEducationIsActive}) {
    
    return(
        <div className="education-Form-Container">
            <h3>School</h3>
            <input type="text" placeholder={values.school}></input>

            <h3>Degree</h3>
            <input type="email" placeholder={values.degree}></input>

            <h3>Start Date</h3>
            <input type="date" placeholder={values.startDate}></input>

            <h3>End Date</h3>
            <input type="date" placeholder={values.endDate}></input>

            <h3>Location</h3>
            <input type="text" placeholder={values.location}></input>
            <button type='button' onClick={()=> onRemove(values.id)}>Delete</button>
            <button onClick={()=>{setEducationIsActive(0)}}>Cancel</button>
            <button>Save</button>
        </div>
    )
}

export default EducationForm