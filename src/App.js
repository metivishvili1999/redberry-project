import './App.css';
import { React, useState } from 'react';
import Covid from './components/Covid'
import WelcomePage from './components/WelcomePage'
import PersonalInfo from './components/PersonalInfo'
import RedberrianInsights from './components/RedberrianInsights'
import Submit from './components/Submit'
import Submitted from './components/Submitted'
import TechnicalSkills from './components/TechnicalSkills'
import ThanksPage from './components/ThanksPage'
import axios from 'axios'


const App = () => {
  const [ steps, setSteps ] = useState(0);
  const [ showSubmitted, setShowSubmitted] = useState(false);

  const [ token ] = useState("a112b77d-0328-4c1a-ade6-7f4daccd5963");
  const [ userObject, setUserObject ] = useState({
    token: token

  });

  const nextPage = () => {
    setSteps(steps + 1);
  }

  const prevPage = () => {
    setSteps(steps - 1);
  }

  const page = () => {
    setSteps(steps + 2)
  }

  const handleSubmitted = () => {
    setShowSubmitted(!showSubmitted);
  }

  const handlePersonalInfo = (data) => {
    setUserObject({ 
      ...userObject,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.number
     })
  }

  const handleTechnicalSkills = (data) => {
    setUserObject({
      ...userObject,
      skills: data
    })
  }

  const handleCovid = (data) => {
    if(data.hadCovid === true && data.vaccinated === true){
      setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.workPreference,
        had_covid: data.hadCovid,
        had_covid_at: data.hadCovidAt,
        vaccinated: data.vaccinated,
        vaccinated_at: data.vaccinatedAt
      })
    }else if(data.hadCovid === false && data.vaccinated === false){
      setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.workPreference,
        had_covid: data.hadCovid,
        vaccinated: data.vaccinated,
      })
    }else if(data.hadCovid === false){
      setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.workPreference,
        had_covid: data.hadCovid,
        vaccinated: data.vaccinated,
        vaccinated_at: data.vaccinatedAt
      })
    }else if(data.vaccinated === false){
      setUserObject({
        token: userObject.token,
        first_name: userObject.first_name,
        last_name: userObject.last_name,
        email: userObject.email,
        phone: userObject.phone,
        skills: userObject.skills,
        work_preference: data.workPreference,
        had_covid: data.hadCovid,
        had_covid_at: data.hadCovidAt,
        vaccinated: data.vaccinated
      })
    }
  }

  const handleRedberrianInsights = (data) => {
    setUserObject({
      ...userObject,
      will_organize_devtalk: data.radioQuestion,
      devtalk_topic: data.devtalkQuestion,
      something_special: data.specialQuestion
    })
  }



  const submitApplication = () => {
    axios.post('https://bootcamp-2022.devtest.ge/api/application', userObject)
      .then(() => {
        setSteps(steps + 1);
        setTimeout(() => {
          setSteps(0);
          setUserObject({
            token: token
          });
        }, 3000)
      })
      .catch(error => console.log(error.message))
  }


  return (
    <div className="App" style={{ height: showSubmitted ? '' : '1080px' }} >
      {showSubmitted && <Submitted token={token}  />}
      {steps === 0 && !showSubmitted  && <WelcomePage nextPage={nextPage} showSubmitted={handleSubmitted} />}
      {steps === 1 && <PersonalInfo nextPage={nextPage} prevPage={prevPage} handlePersonalInfo={handlePersonalInfo} userObject={userObject} />}
      {steps === 2 && <TechnicalSkills nextPage={nextPage} prevPage={prevPage} handleTechnicalSkills={handleTechnicalSkills} userObject={userObject} />}
      {steps === 3 && <Covid nextPage={nextPage} prevPage={prevPage} handleCovid={handleCovid} />}
      {steps === 4 && <RedberrianInsights nextPage={nextPage} prevPage={prevPage} handleRedberrianInsights={handleRedberrianInsights} userObject={userObject} />}
      {steps === 5 && <Submit prevPage={prevPage} submitApplication={submitApplication} />}
      {steps === 6 && <ThanksPage />}
    </div>
  );
}

export default App;
