import { React, useEffect, useState } from 'react';
import '../App.css';
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';


const RedberrianInsights = ({prevPage, nextPage}) => {

    const [insightForm, setInsightForm] = useState ({
        will_organize_devtalk: '',
        devtalk_topic: '',
        something_special: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInsightForm({ ...insightForm, [name]: value });
      };

    const [insightErr, setInsightErr] = useState({});

    const insightValidation = () => {
        setInsightErr('');
        if(insightForm.will_organize_devtalk === ''){
            setInsightErr(' this field is required');
        }else if(insightForm.devtalk_topic === '') {
            setInsightErr( 'this field is required')
        }else if(insightForm.something_special === '') {
            setInsightErr(' this field is required')
        }else { 
            
            nextPage();
        }
    }








    return (
        <div className='container'>
          <div className='redberrian-left-panel'>
            <div className='left-panel-text'>
                What about you?
            </div>
            <div className='questions-pos'>
            <div className="radio-question">
              <h3 className='radio-question-title' >Would you attend Devtalks and maybe also organize your own?</h3>
              <div>
                <div className='radio-input'>
                  <input
                    type="radio"
                    name="will_organize_devtalk"
                    id="willOrganize"
                    value="true"
                    onChange={handleChange}
                  />
                  <label htmlFor="willOrganize">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="will_organize_devtalk"
                    id="willNotOrganize"
                    value="false"
                    onChange={handleChange}
                  />
                  <label htmlFor="willNotOrganize">No</label>
                </div>
                <p className="errors">{insightErr.will_organize_devtalk}</p>
              </div>
            </div>
            <div className="devtalk-question">
              <label className='devtalk-title' htmlFor="devtalkTopic">
                What would you speak about at Devtalk?
              </label>
              <textarea
              className='devtalk-input'
                name="devtalk_topic"
                id="devtalkTopic"
                placeholder="I would..."
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
            <p className="errors">{insightErr.devtalk_topic}</p>
            <div className="special-question">
              <label className='special-title' htmlFor="special">Tell us something special</label>
              <textarea
              className='special-input'
                name="something_special"
                id="special"
                placeholder="I..."
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
            <p className="errors">{insightErr.something_special}</p>
          </div>


            <div className="pagination">
                <img src={prev} onClick={prevPage} className="prevnext" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={ellipse1} className="pagination-steps" />
                <img src={ellipse2} className="pagination-steps" />
                <img src={next} onClick={insightValidation} className="prevnext" />
            </div>
          </div>
          <div className='skills-right-panel'>
            <h1 className='skills-right-panel-title'>Redberrian Insights</h1>
            <p className='skills-right-panel-text'>
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