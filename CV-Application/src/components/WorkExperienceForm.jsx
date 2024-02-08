import '../styles/PersonalDetails.css'
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react"

function WorkExperienceForm({values, setActiveExpForm, onRemove, setExperienceIsActive,setExpList, expList}) {

    const cancelForm = () => {
        setExperienceIsActive(0)
        setActiveExpForm({test: "a"})
    }
    const unique_id = uuid();

    const handleSubmit = (e, values, expList) => {
        var newExpItem = true

        e.preventDefault();
        var newExp = {
            id: unique_id,
            company: e.target[0].value,
            position: e.target[1].value,
            description: e.target[2].value,
            location: e.target[3].value,
            startDate: e.target[4].value,
            endDate: e.target[5].value
        }

        const nextExpList = expList.map(exp => {
            console.log(values.id);
            if(values.id === exp.id){
                newExpItem = false
                return {
                    ...exp,
                    company: e.target[0].value,
                    position: e.target[1].value,
                    description: e.target[2].value,
                    location: e.target[3].value,
                    startDate: e.target[4].value,
                    endDate: e.target[5].value,
                  };
            } else {
                return exp
            }
        })
        if(newExpItem === false){
            setExpList(nextExpList)
            setExperienceIsActive(1)
        } else {
            setExpList([...expList, newExp])
            setExperienceIsActive(1)
        }

        setActiveExpForm({test: "a"})

    }
    
    return(
        <div className="education-Form-Container">
        <form onSubmit={(e) => handleSubmit(e, values, expList)}>
            <h3>Company</h3>
            <input type="text" defaultValue={values.company}></input>

            <h3>Position</h3>
            <input type="text" defaultValue={values.position}></input>

            <h3>Description</h3>
            <input type="text" defaultValue={values.description}></input>

            <h3>Location</h3>
            <input type="text" defaultValue={values.location}></input>

            <h3>Start Date</h3>
            <input type="text" defaultValue={values.startDate}></input>

            <h3>End Date</h3>
            <input type="text" defaultValue={values.endDate}></input>
            <button type='button' onClick={()=> onRemove(values.id)}>Delete</button>
            <button onClick={()=>{cancelForm()}}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
            
        </div>
    )
}

export default WorkExperienceForm