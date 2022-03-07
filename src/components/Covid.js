import { React, useEffect, useState } from 'react';
import '../App.css';
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';


const  Covid = ({prevPage, nextPage}) => {

    const [ workPreference, setWorkPreference ] = useState('');
    const [ hadCovid, setHadCovid ] = useState('');
    const [ hadCovidAt, setHadCovidAt ] = useState('');
    const [ vaccinated, setVaccinated ] = useState('');
    const [ vaccinatedAt, setVaccinatedAt ] = useState('');
    
    const [ workPreferenceErr, setWorkPreferenceErr ] = useState('');
    const [ hadCovidErr, setHadCovidErr ] = useState('');
    const [ hadCovidAtErr, setHadCovidAtErr ] = useState('');
    const [ vaccinatedErr, setVaccinatedErr ] = useState('');
    const [ vaccinatedAtErr, setVaccinatedAtErr ] = useState('');

    const workPreferenceValidation = () => {
      if(workPreference === '') {
        setWorkPreferenceErr('this field is required')
        return false;
      } else {
        return true;
      }
    }

    const hadCovidValidation = () => {
      if(hadCovid === '') {
        setHadCovidErr('this field is required')
        return false;
      } 
      else if (hadCovid === 'yes' && hadCovidAt === ''){
        setHadCovidAtErr('this field is required')
        return false;
      } 
      else {
        return true;
      }
    }

    const vaccinatedValidation = () => {
      if(vaccinated === '') {
        setVaccinatedErr('this field is required')
        return false;
      } else if (vaccinated === 'yes' && vaccinatedAt === '') {
        setVaccinatedAtErr('this field is required')
        return false;
      } else {
         return true;
       }

    }

    const covidResults = () => {
      setWorkPreferenceErr('');
      setHadCovidErr('');
      setHadCovidAtErr('');
      setVaccinatedErr('');
      setVaccinatedAtErr('');
      if(workPreferenceValidation() && hadCovidValidation() && vaccinatedValidation()) {

        nextPage();
      }
    }



    return (
        <div className='container'>
          <div className='covid-left-panel'>
            <div className='left-panel-text'>
                Covid Stuff  
            </div>
            

            <div className="pagination">
                <img src={prev} onClick={prevPage} className="prevnext" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse1} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={next} onClick={covidResults} className="prevnext" />
            </div>
          </div>
          <div className='skills-right-panel'>
            <h1 className='skills-right-panel-title'>Redberry Covid Policies</h1>
            <p className='skills-right-panel-text'>
            As this infamous pandemic took over the world,
           we adjusted our working practices so that our employees can be as safe and comfortable as possible.
           We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street.
           If it was up to us, we would love you to see us in the office because we think face-to-face communications {">"} 
           Zoom meetings. Both on the fun and productivity scales.
            </p>
          </div>
        </div>
      )

}

export default Covid;