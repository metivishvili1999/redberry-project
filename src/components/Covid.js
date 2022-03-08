import { React, useState } from 'react';
import '../App.css';
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';
import calendar from '../assets/calendar.svg';


const  Covid = ({prevPage, nextPage, handleCovid}) => {

  const [ covidDate, setCovidDate ] = useState(false);
  const [ vaccinatedDate, setVaccinatedDate ] = useState(false);

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


    const handleCovidDate = (value) => {
      if(value === 'yes'){
        setCovidDate(true);
        setHadCovid(true);
      }else{
        setCovidDate(false);
        setHadCovid(false);
      }
    }
  
    const handleVaccinated = (value) => {
      if(value === 'yes'){
        setVaccinatedDate(true);
        setVaccinated(true);
      }else{
        setVaccinatedDate(false);
        setVaccinated(false);
      }
    }



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
      else if (hadCovid === true && hadCovidAt === ''){
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
      } else if (vaccinated === true && vaccinatedAt === '') {
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
        const covidObj = {
          workPreference,
          hadCovid,
          hadCovidAt,
          vaccinated,
          vaccinatedAt
        }
        handleCovid(covidObj)
        nextPage();
      }
    }


    return (
        <div className='covid-container'>
          <div className='covid-left-panel'>
            <div className='covid-left-panel-text'>
                Covid Stuff  
            </div>
            <div className="covid-form">
          <div className="covid-workpreference">
            <p className="quest-title">how would you prefer to work?</p>
            {workPreferenceErr && <p className="covid-quest-validation" style={{ padding: 0 }}>{workPreferenceErr}</p>}
            <form onChange={({ target }) => setWorkPreference(target.value)}>
              <div>
                <input type="radio" name="work-preference" id="from-office" 
                  value="from_office" />
                <label htmlFor="from-office">From Sairme Office</label>
              </div>
              <div>
                <input type="radio" name="work-preference" id="from-home"
                  value="from_home" />
                <label htmlFor="from-home">From Home</label>
              </div>
              <div>
                <input type="radio" name="work-preference" id="hybrid"
                  value="hybrid" />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
            </form>
          </div>
          <div className='hadCovid'>
            <p className="quest-title">Did you contact covid 19? :(</p>
            {hadCovidErr && <p className="covid-quest-validation" style={{ padding: 0 }}>{hadCovidErr}</p>}
            <form onChange={({ target }) => handleCovidDate(target.value)}>
              <div>
                <input type="radio" id="yes" name="had-covid" value="yes" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input type="radio" id="no" name="had-covid" value="no" />
                <label htmlFor="no">No</label>
              </div>
            </form>
          </div>
          <div className="hadCovidAt" style={{ display: covidDate ? 'flex' : 'none' }}>
            <p className="quest-title">When?</p>
            <input type="date" onChange={({ target }) => setHadCovidAt(target.value)}
              placeholder="Date" style={{ borderColor: hadCovidAtErr ? '#FE3B1F' : '#525557' }} />
            {hadCovidAtErr && <p className="covid-quest-validation" style={{ padding: 0, marginTop: 5 }}>{hadCovidAtErr}</p>}
          </div>
          <div className='vaccinated'>
            <p className="quest-title">Have you been vaccinated?</p>
            {vaccinatedErr && <p className="covid-quest-validation" style={{ padding: 0 }}>{vaccinatedErr}</p>}
            <form onChange={({ target }) => handleVaccinated(target.value)}>
              <div>
                <input type="radio" id="vaccinated_yes" name="vaccinated" value="yes" />
                <label htmlFor="vaccinated_yes" >Yes</label>
              </div>
              <div>
                <input type="radio" id="vaccinated_no" name="vaccinated" value="no" />
                <label htmlFor="vaccinated_no">No</label>
              </div>
            </form>
          </div>
          <div className="vaccinatedAt" style={{display: vaccinatedDate ? 'flex' : 'none' }}>
            <p className="quest-title">When did you get your last covid vaccine?</p>
            <input type="date" onChange={({ target }) => setVaccinatedAt(target.value)}
              placeholder="Date" style={{ borderColor: vaccinatedAtErr ? '#FE3B1F' : '#525557' }} />
            {vaccinatedAtErr && <p className="covid-quest-validation" style={{ padding: 0, marginTop: 5 }}>
              {vaccinatedAtErr}</p>}
          </div>
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
          <div className='covid-right-panel'>
            <h1 className='covid-right-panel-title'>Redberry Covid Policies</h1>
            <p className='covid-right-panel-text'>
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