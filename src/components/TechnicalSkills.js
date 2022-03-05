

import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import '../App.css';
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';
import remove from '../assets/Remove.svg';

const TechnicalSkills = ({nextPage, prevPage}) => {

  const [skills, setSkills] = useState ([])
  const [skillsList, setSkillsList] = useState ([])
  const inputYears = useRef(null)
  const inputSkill = useRef(null)

  useEffect(() => {
    fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);

  const addSkills = () => {
    if (
      skillsList.filter((obj) => obj.skill === inputSkill.current.value)
        .length === 0
    ) {
      if (
        inputSkill.current.value !== 'Skills' &&
        +inputYears.current.value > 0
      ) {
        setSkillsList(
          skillsList.concat([
            {
              id: inputSkill.current.selectedIndex - 1,
              skill: inputSkill.current.value,
              experience: +inputYears.current.value,
            },
          ])
        );
      }
    }
  };

  useEffect(() => {
    let Err = '';
    if (skillsList.length === 0) {
      Err = 'You need to choose at least one skill!';
    }
    setSkillsFormErr(Err);
    setSkillsForm(
      skillsList.map((skill) => {
        const { id, experience } = skill;
        return { id, experience };
      })
    );
  }, [skillsList]);


  return (
    <div className='container'>
      <div className='skills-left-panel'>
        <div className='left-panel-text'>
          Tell us about your skills
        </div>
        <div className="skills-form">
        <select defaultValue="Skills" ref={inputSkill}>
                <option>Skills</option>
                {skills.map((skill) => {
                  return <option>{skill.title}</option>;
                })}
              </select>
              <input
                type="number"
                placeholder="Experience Duration in Years"
                ref={inputYears}
              />
          <div className='addButton'>
            <button type='button' onClick={() => {addSkills()}}>Add Programming Language</button>
          </div>
        </div>  
        <div className='chosen-skills'>
              {skillsList.map((element) => {
                return (
                  <div className="chosen-skills-list">
                    <div className='skill-title'>{element.skill}</div>
                    <div className='skill-exp'>Years of Experience: {element.experience}</div>
                    <img
                      src={remove}
                      className='remove-skill'
                      onClick={() => {
                        setSkillsList(
                          skillsList.filter((skillObj) => skillObj !== element)
                        );
                      }}
                    />
                  </div>
                );
              })}
            </div>
        <div className="pagination">
          <img src={prev} onClick={prevPage} className="prevnext" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse1} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={next} onClick={nextPage} className="prevnext" />
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
