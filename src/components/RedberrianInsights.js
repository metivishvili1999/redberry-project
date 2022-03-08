import { React, useEffect, useState } from 'react';
import '../App.css';
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';


const RedberrianInsights = ({prevPage, nextPage, handleRedberrianInsights, userObject}) => {


  const [radioQuestion, setRadioQuestion] = useState('');
  const [devtalkQuestion, setDevtalkQuestion] = useState('');
  const [specialQuestion, setSpecialQuestion] = useState('');

  const [radioQuestionsErr, setRadioQuestionsErr] = useState('');
  const [devtalkQuestionErr, setDevtalkQuestionErr] = useState('');
  const [specialQuestionErr, setSpecialQuestionErr] = useState('');


  useEffect(() => {
    if(userObject.devtalk_topic){
      setDevtalkQuestion(userObject.devtalk_topic);
    }
    if(userObject.something_special){
      setSpecialQuestion(userObject.something_special);
    }
  }, [userObject])


  const handleDevtalkValue = (value) => {
    if(value === 'yes'){
      setRadioQuestion(true);
    }else{
      setRadioQuestion(false);
    }
  }


  const radioValidation = () => {
    if(radioQuestion !== true && radioQuestion !== false){
      setRadioQuestionsErr('this field is required')
      return false
    } else {
      return true;
    }
  }

  const devtalkValidation = () => {
    if(devtalkQuestion === '') {
      setDevtalkQuestionErr('this field is required')
      return false;
    } else {
      return true;
    }
  }

  const specialValidation = () => {
    if(specialQuestion === ''){
      setSpecialQuestionErr('this field is required')
      return false;
    } else {
      return true;
    }
  }

    const redberrianValidation = () => {
      setRadioQuestionsErr('');
      setDevtalkQuestionErr('');
      setSpecialQuestionErr('');
        if(radioValidation() && devtalkValidation() && specialValidation()) {
          const devtalkObj = {
            radioQuestion,
            devtalkQuestion,
            specialQuestion
          }
          handleRedberrianInsights(devtalkObj);
          nextPage();
        }
    }



    return (
        <div className='redberrian-container'>
          <div className='redberrian-left-panel'>
            <div className='redberrian-left-panel-text'>
                What about you?
            </div>
            <div className='redberrian-form'>
              <div className="radio-quest">
                <p className="quest-title">Would you attend Devtalks and maybe also organize your own?</p>
                {radioQuestionsErr && <p className="quest-validation" style={{ padding: 0 }}>{radioQuestionsErr}</p>}
                <form onChange={({ target }) => handleDevtalkValue(target.value)}>
                  <div>
                    <input id="devtalk_yes" type="radio" name="devtalk" value="yes" />
                    <label htmlFor="devtalk_yes">Yes</label>
                  </div>
                  <div>
                    <input id="devtalk_no" type="radio" name="devtalk" value="no" />
                    <label htmlFor="devtalk_no">No</label>  
                  </div>
                </form>
              </div>

              <div className="devtalk-quest">
                <p className="quest-title">What would you speak about at Devtalk?</p>
                {devtalkQuestionErr && <p className="quest-validation" style={{ padding: 0 }}>{devtalkQuestionErr}</p>}
                <textarea onChange={({ target }) => setDevtalkQuestion(target.value)} 
                  placeholder="I would..." value={devtalkQuestion}
                  style={{ borderColor: devtalkQuestionErr ? '#FE3B1F' : '#525557' }} /> 
              </div>

              <div className='special-quest'>
                <p className="quest-title">Tell us something special</p>
                {specialQuestionErr && <p className="quest-validation" style={{ padding: 0 }}>{specialQuestionErr}</p>}
                <textarea onChange={({ target }) => setSpecialQuestion(target.value)}
                  placeholder="I..." className="bottom-textarea" value={specialQuestion}
                  style={{ borderColor: specialQuestionErr ? '#FE3B1F' : '#525557' }} />
              </div>
            </div>

            <div className="pagination">
                <img src={prev} onClick={prevPage} className="prevnext" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse1} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={next} onClick={redberrianValidation} className="prevnext" />
            </div>
          </div>
          <div className='redberrian-right-panel'>
            <h1 className='redberrian-right-panel-title'>Redberrian Insights</h1>
            <p className='redberrian-right-panel-text'>
            We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday
            celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try
            our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk
            about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We
            hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!
            </p>
          </div>
        </div>
      )
}

export default RedberrianInsights;