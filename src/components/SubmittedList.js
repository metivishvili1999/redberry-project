import { React, useState } from 'react';
import '../App.css';
import arrUp from '../assets/up.svg';
import arrDown from '../assets/down.svg';

const SubmittedList = ({ data, index, skills }) => {

  const [ showFull, setShowFull ] = useState(false);

  return (
    <div className="submitted-container">
      <div className="submitted-list">
        {index + 1}
        <img onClick={() => setShowFull(!showFull)} src={showFull ? arrUp : arrDown} 
          style={{ background: "inherit" }} alt="arrow" />
      </div>
      <div className="submitted-details" style={{ display: showFull ? 'flex' : 'none' }}>
        <div className="subDetails-left-panel">
          <div className="subPersonal">
            <h1 className="subPersonal-title">Personal Information</h1>
            <div>
              <p>First Name</p>
              <p>{data.first_name}</p>
            </div>
            <div>
              <p>Last Name</p>
              <p>{data.last_name}</p>
            </div>
            <div>
              <p>Email</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p>Phone</p>
              <p>{data.phone}</p>
            </div>
          </div>
          <div className="subCovid">
            <h1 className="subCovid-title">Covid Situation</h1>
            <div>
              <p>how would you prefer to work?</p>
              <form>
                <div>
                  <input type="radio" disabled checked={data.work_preference === 'from_office' && true} />
                  <label>From Sairme Office</label>
                </div>

                <div>
                  <input type="radio" disabled checked={data.work_preference === 'from_home' && true} />
                  <label>From Home</label>
                </div>

                <div>
                  <input type="radio" disabled checked={data.work_preference === 'hybrid' && true} />
                  <label>Hybrid</label>
                </div>
              </form>
            </div>

            <div>
              <p>Did you have covid 19?</p>
              <form>
                <div>
                  <input type="radio" disabled checked={data.had_covid === true && true} />
                  <label>Yes</label>
                </div>

                <div>
                  <input type="radio" disabled checked={data.had_covid === false && true} />
                  <label>No</label>
                </div>
              </form>
            </div>

            <div className="subCovid-date" style={{ display: data.had_covid ? 'flex' : 'none' }}>
              <p>When did you have covid 19?</p>
              <input type="date" disabled value={data.had_covid_at ? data.had_covid_at : ''} />
            </div>

            <div>
              <p>Have you been vaccinated?</p>
              <form>
                <div>
                  <input type="radio" disabled checked={data.vaccinated === true && true} />
                  <label>Yes</label>
                </div>

                <div>
                  <input type="radio" disabled checked={data.vaccinated === false && true} />
                  <label>No</label>
                </div>
              </form>
            </div>

            <div className="subCovid-date" style={{ display: data.vaccinated ? 'flex' : 'none' }}>
              <p>When did you get covid vaccine?</p>
              <input type="date" disabled value={data.vaccinated_at ? data.vaccinated_at : '' } />
            </div>
          </div>
        </div>

        <div className="subDetails-right-panel">
          <div className="subSkills">
            <h1 className="subSkills-title">Skillset</h1>
            <div>
              {data.skills.map((i, index) => {
                return (
                  <div className="subSkills-list" key={index}>
                    <p>{skills.length !== 0 ? skills.find(a => a.id === i.id).title : ''}</p>
                    <p>Years of Experience: {i.experience}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="subRedberrians">
            <h1 className="subRedberrians-title">Insigts</h1>
            <div>
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              <form>
                <div>
                  <input type="radio" disabled checked={data.will_organize_devtalk && true} />
                  <label>Yes</label>
                </div>

                <div>
                  <input type="radio" disabled checked={!data.will_organize_devtalk && true} />
                  <label>No</label>
                </div>
              </form>
            </div>

            <div>
              <p>What would you speak about at Devtalk?</p>
              <textarea disabled value={data.devtalk_topic} />
            </div>
            
            <div>
              <p>Tell us somthing special</p>
              <textarea disabled value={data.something_special} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmittedList;