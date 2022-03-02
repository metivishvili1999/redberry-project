import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';


const TechnicalSkills = () => {

  const [skills, setSkills] = useState ([])
  const [skillsList, setSkillsList] = useState ({
    id: '',
    experience: ''
  })

  useEffect(() => {
    const getSkills = async() => {
        try{
            let {data} = await axios.get('https://bootcamp-2022.devtest.ge/api/skills')
            setSkills(data)
        }catch(Error){
            console.log({message: Error})
        }
    }
    getSkills()
}, [])


  return (
    <div className='container'>
      <div className='skills-left-panel'>
        <div className='left-panel-text'>
          Tell us about your skills
        </div>
        <div className="skills-form">
          <select defaultValue={'skills'} onChange={({target}) => setSkillsList({skill: target.value, experience: skillsList.experience})}>
            <option  disabled value={'skills'}>skills</option>
            {skills.map(skills => {
              return(
                <option key={skills.id} value={skills.id}>{skills.title}</option>
                )
                })}
          </select>
          <input onChange={({target}) => setSkillsList({id: skillsList.skill, experience: target.value})}
            type='text'
            placeholder="Experience Duration in Years" />
          <div className='addButton'>
            <button onClick={() => console.log(skillsList)}>Add Programming Language</button>
          </div>
        </div>              
      </div>
      <div className='skills-right-panel'>
        <h1 className='skills-right-panel-title'>A bit about our battles</h1>
        <p className='skills-right-panel-text'>
        As we said, Redberry has been on the field for quite some time now, and we have
        touched and embraced a variety of programming languages, technologies, philosophies,
        and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React,
        and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.
        </p>
      </div>
    </div>
  )

}


export default TechnicalSkills;
