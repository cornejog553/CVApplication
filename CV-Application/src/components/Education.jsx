import '../styles/PersonalDetails.css'
import { useEffect, useState } from "react"
import EducationForm from './EducationForm';

function Education({values, setEduList}) {
    const [isEducationActive, setEducationIsActive] = useState(0);
    const [activeSchoolForm, setActiveSchoolForm] = useState({test: "a"});
    // const [list, setList] = useState(values.education);

    var activateSchoolForm = (item) => {
        {setEducationIsActive(2)
        setActiveSchoolForm(item)
        }        
    }

    var educationSchools = values.map(edu => 
        <div key={edu.id}>
            <button type='button' 
            className='displayedSchoolButtons'
            onClick={()=> {activateSchoolForm(edu)}}>{edu.school}
            </button>
            <button onClick={()=>handleRemove(edu.id)}>Delete</button>
        </div>
        );

    function handleRemove(id){
        educationSchools = values.filter((item) => item.id !== id); 
        setEduList(educationSchools)  
        setEducationIsActive(0) 
    }
        
    return(
        <div className="education-Container">
            { isEducationActive == 1 ? (
                <>
                    <button className = "educationButton"
                    onClick = {()=> setEducationIsActive(0)}
                    >
                    <h1>Education</h1>
                    </button>
                    <button>Add Education</button>
                    <h2>{educationSchools}</h2>
                </>
                
            ) : isEducationActive == 2 ? (
                <>
                    <button className = "educationButton"
                    onClick = {()=> setEducationIsActive(0)}
                    >
                    <h1>Education</h1>
                    </button>
                    <EducationForm
                    values={activeSchoolForm}
                    onRemove={handleRemove}
                    setEducationIsActive={setEducationIsActive}
                    setEduList={setEduList}
                    eduList={values}
                    />
                </>
                
            )
              : (
                <>
                    <button className = "educationButton"
                    onClick = {()=> setEducationIsActive(1)}
                    >
                    <h1>Education</h1>
                    </button>
                    <button onClick = {()=> setEducationIsActive(2) }>Add Education</button>
                </>
                )
            }

        </div>
    )
}

export default Education