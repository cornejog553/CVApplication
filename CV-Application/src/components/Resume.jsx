import '../styles/Resume.css'

function Resume(){
    return(
        <div className="resume-Container">  
            <div className="resume-header">
                <h1>Full Name</h1>
                <div className='resume-header-info'>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Address</p>
                </div>
            </div> 
            <div className='educationAndExperienceSection'>
                <div className='education'>
                    <h2>Education</h2>
                </div>
                <div className='education-Content'>
                    <div>
                        <p>08/2020 – present</p>
                        <p>New York City, US</p>
                    </div>
                    <div className='universityAndDegree'>
                        <p className='university'>London City University</p>
                        <p>Bachelors in Economics</p>
                    </div>
                </div>

                <div className='experience'>
                    <h2>Experience</h2>
                </div>
                <div className='experience-Content'>
                    <div>
                        <p>08/2020 – present</p>
                        <p>New York City, US</p>
                    </div>
                    <div className='universityAndDegree'>
                        <p className='jobCompany'>Umbrella Inc.</p>
                        <p>UX & UI Designer</p>
                        <p>Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Resume