import '../styles/PersonalDetails.css'
import { useEffect, useState } from "react"
import WorkExperienceForm from './WorkExperienceForm';

function WorkExperience({values, setExpList}) {

    const [isExperienceActive, setExperienceIsActive] = useState(0);
    const [activeExpForm, setActiveExpForm] = useState({test: "a"});
    // const [list, setList] = useState(values.education);

    var activateExpForm = (item) => {
        {   setExperienceIsActive(2)
            setActiveExpForm(item)
        }
    }

    var expSchools = values.map(exp => 
        <div key={exp.id}>
            <button type='button' 
            className='displayedSchoolButtons'
            onClick={()=> {activateExpForm(exp)}}>{exp.company}
            </button>
            <button onClick={()=>handleRemove(exp.id)}>Delete</button>
        </div>
        );

    function handleRemove(id){
        expSchools = values.filter((item) => item.id !== id); 
        setExpList(expSchools)  
        setExperienceIsActive(0) 
        setActiveExpForm({test: "a"})
    }


    return(
        <div className="education-Container">
            { isExperienceActive == 1 ? (
                <>
                    <button className = "educationButton"
                    onClick = {()=> setExperienceIsActive(0)}
                    >
                    <h1>Experience</h1>
                    </button>
                    <button onClick = {()=> setExperienceIsActive(2) }>Add Experience</button>
                    <h2>{expSchools}</h2>
                </>
                
            ) : isExperienceActive == 2 ? (
                <>
                    <button className = "educationButton"
                    onClick = {()=> setExperienceIsActive(0)}
                    >
                    <h1>Experience</h1>
                    </button>
                    <WorkExperienceForm
                    values={activeExpForm}
                    setActiveExpForm={setActiveExpForm}
                    onRemove={handleRemove}
                    setExperienceIsActive={setExperienceIsActive}
                    setExpList={setExpList}
                    expList={values}
                    />
                </>
                
            )
              : (
                <>
                    <button className = "educationButton"
                    onClick = {()=> setExperienceIsActive(1)}
                    >
                    <h1>Experience</h1>
                    </button>
                    <button onClick = {()=> setExperienceIsActive(2) }>Add Experience</button>
                </>
                )
            }

        </div>
    )
}

export default WorkExperience