
import React from 'react'
import { useEffect, useState} from 'react';
import { validExp } from './FormValidations';
import axios from 'axios'
import '../App.css';
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';
import remove from '../assets/Remove.svg';

const TechnicalSkills = ({nextPage, prevPage,handleTechnicalSkills, userObject}) => {

  const [ skillTitle, setSkillTitle ] = useState('');
  const [ expTime, setExpTime ] = useState('');
  const [ skillTitleErr, setSkillTitleErr ] = useState('');
  const [ expTimeErr, setExpTimeErr ] = useState('');
  const [ skillsErr, setSkillsErr ] = useState('');

  let [ skillsArray, setSkillsArray ] = useState([]);
  let [skillsList, setSkillsList] = useState ([]);

  useEffect(() => {
    setSkillsList(skillsList = []);
    setSkillsArray(skillsArray = []);
    
    axios.get('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => setSkillsArray(skillsArray.concat(response.data)))
      .catch(error => console.log(error.message))
    if(userObject.skills && userObject.skills.length !== 0){
      setSkillsList(skillsList.concat(userObject.skills));
    }
  }, [])


  const addskillTitle = (e) => {
    e.preventDefault();
    setExpTimeErr('');
    setSkillTitleErr('');
    setSkillsErr('');
    const findskillTitle = skillsArray.find(i => i.title === skillTitle);
    if(!skillTitle) {
      setSkillTitleErr('select skills')
      setExpTime('');
    } else if(!findskillTitle) {
      setSkillTitleErr('please select correct skill');
      setSkillTitle('');
      setExpTime('');
    } else if(skillsList.find(i => i.id === findskillTitle.id)) {
      setSkillTitleErr('this skill is already selected');
      setSkillTitle('');
      setExpTime('');
    } else if(expTime === '') {
      setExpTimeErr('experience is required');
    } else if(!expTime.match(validExp)) {
      setExpTimeErr('type experience years');
      setExpTime('');
    } else {
      const skillsObj = {
        id: findskillTitle.id,
        title: findskillTitle.title,
        expTime: expTime
      }
      setSkillsList(skillsList.concat(skillsObj));
      setSkillTitle('');
      setExpTime('');
    }
  }

  const removeskillTitle = (i) => {
    const newArray = skillsList.filter(a => a.id !== i.id)
    setSkillsList(newArray);
  }

  const validateSkills = () => {
    setSkillTitleErr('');
    setSkillsErr('');
    setExpTimeErr('');
    if(skillsList.length !== 0) {
      handleTechnicalSkills(skillsList);
      nextPage();
    } {
      setSkillsErr('please select skills');
      return;
    }
  }


  return (
    <div className='skills-container'>
      <div className='skills-left-panel'>
        <div className='skills-left-panel-text'>
          Tell us about your skills
        </div>
        <div className="skills-form">
          <form onSubmit={addskillTitle}> 
            <input
              className="datalist"
              list="skills" 
              name="skills"  
              placeholder="Skills"
              onChange={({ target }) => setSkillTitle(target.value)} value={skillTitle}
              style={{ borderColor: skillTitleErr ? '#FE3B1F' : '#525557' }}
            />
            <datalist id="skills" value={skillsArray} >
                {skillsArray.length !== 0 && skillsArray.map(i => {
                  return (
                    <option key={i.id} value={i.title} />
                  )
                })}
            </datalist>
            {skillTitleErr && <p className="skillValidation">{skillTitleErr}</p>}
            {skillsErr && <p className="skillValidation" >{skillsErr}</p>}
            <input
              type="text" 
              onChange={({ target }) => setExpTime(target.value)}
              placeholder="experience in Years" 
              value={expTime}
              style={{ borderColor: expTimeErr ? '#FE3B1F' : '#525557' }}
            />
            {expTimeErr && <p className="skillValidation">{expTimeErr}</p>}
            <button type="submit">Add Programming Language</button>
          </form>
          <div className="added-skills-list">
            {skillsList.length !== 0 && skillsList.map(i => {
              return (
                <div key={i.id}>
                  <div>
                    <p>{i.title}</p>
                    <p>Years of experience: {i.expTime}</p>
                  </div>
                  <img src={remove} onClick={() => removeskillTitle(i)} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="pagination">
          <img src={prev} onClick={prevPage} className="prevnext" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse1} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={next} onClick={validateSkills} className="prevnext" />
        </div>            
      </div>
      <div className='skills-right-panel'>
        <h1 className='skills-right-panel-title'>A bit about our battles</h1>
        <p className='skills-right-panel-text'>
        As we said, Redberry has been on the field for quite some time now, and we have
        touched and embraced a variety of programming skillTitles, technologies, philosophies,
        and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React,
        and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.
        </p>
      </div>
    </div>
  )

}


export default TechnicalSkills;
