import '../styles/Resume.css'

function Resume({values, eduValues}){
    const educationListItems = eduValues.map(edu => 
        <>
            <div>
            <p>{edu.startDate} – {edu.endDate}</p>
            <p>{edu.location}</p>
            </div>
            <div className='universityAndDegree'>
                <p className='university'>{edu.school}</p>
                <p>{edu.degree}</p>
            </div>
        </>
        );

    const experienceListItems = values.experience.map(exp => 
            <>
                <div>
                <p>{exp.startDate} – {exp.endDate}</p>
                <p>{exp.location}</p>
                </div>
                <div className='universityAndDegree'>
                    <p className='jobCompany'>{exp.company}</p>
                    <p>{exp.position}</p>
                    <p>{exp.description}</p>
                </div>
            </>
            );

    return(
        <div className="resume-Container">  
            <div className="resume-header">
                <h1>{values.name}</h1>
                <div className='resume-header-info'>
                    <p>{values.email}</p>
                    <p>{values.phone}</p>
                    <p>{values.address}</p>
                </div>
            </div> 
            <div className='educationAndExperienceSection'>
                <div className='education'>
                    <h2>Education</h2>
                </div>
                <div className='education-Content'>
                    {educationListItems}
                </div>

                <div className='experience'>
                    <h2>Experience</h2>
                </div>
                <div className='experience-Content'>
                    {experienceListItems}
                </div>
            </div>
            
            
        </div>
    )
}

export default Resume