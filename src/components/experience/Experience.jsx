import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import { SlCalender } from "react-icons/sl"
import './Experience.css'

const Experience = ({ state }) => {

    const [education, setEducation] = useState("");
    // const [experience, setExperience] = useState("");

    useEffect(() => {
        const { contract } = state;
        const educationDetails = async () => {
            const education = await contract.methods.allEducationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    }, [state])

    // useEffect(() => {
    //     const { contract } = state;
    //     const experienceDetails = async () => {
    //         const expereince = await contract.methods.allExperiencedetails().call();
    //         setExperience(expereince);
    //     }
    //     contract && experienceDetails();
    // }, [state])

    return (
        <section className="exp-section">
            <h1 className="title">Education </h1>
            <div className="container">
                <div className="education">
                    {/* <h1 className="edu-tittle">Education</h1> */}
                    {education !== "" && education.map((edu) => {
                        return (
                            <div key={edu.id} className="edu-card">
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                <p className="card-text3">{edu.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {edu.institutionName}
                                </p>
                            </div>)
                    })}
                </div>

                {/* <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    {experience !== "" && experience.map((exp) => {
                        return (
                            <div key={exp.id} className="edu-card">
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {exp.date}
                                </p>
                                <h3 className="card-text2">{exp.degree}</h3>
                                <p className="card-text3">{exp.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {exp.company}
                                </p>
                            </div>)
                    })}
                </div> */}
            </div>
        </section>
    )
}
Experience.propTypes = {
    state: PropTypes.object.isRequired,
};
export default Experience
