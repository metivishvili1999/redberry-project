import { React, useState } from 'react';
import { validEmail, validFirstName, validLastName, validNumber } from './FormValidations'
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';



const PersonalInfo = ({ nextPage, prevPage, handleInfo }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [numberErr, setNumberErr] = useState(false);

  const validate = () => {
    if (!validFirstName.test(firstName)) {
      setFirstNameErr(true);
    }
    if (!validLastName.test(lastName)){
      setLastNameErr(true);
    }
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
     if (!validNumber.test(number)) {
        setNumberErr(true);
     }
     
  };


  return (
    <div className="form">
      <div className="left-panel">
        <div className="left-panel-text">
          Hey, Rocketeer, what are your coordinates?
        </div>
        <div className="info-form">
          <div>
          <input type="text"
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        {firstNameErr && <p>first name is required</p>}
          </div>

          <div>
          <input type="text"
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        {lastNameErr && <p>last name should include 2 or more characters</p>}
          </div>

          <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         {emailErr && <p>Your email is invalid</p>}
          </div>

          <div>
          <input
            type="number"
            placeholder="+995 5"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
         />
         {numberErr && <p>Your number is invalid</p>}
          </div>
        </div>
        {/* Navigation */}
        <div className="pagination">
          <img src={prev} onClick={prevPage} className="prevnext" />
          <img src={ellipse1} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={next} onClick={validate} className="prevnext" />
        </div>
      </div>
      <div className="right-panel">
        <h1 className="right-panel-title">Redberry Origins</h1>
        <p className="right-panel-text">
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );

}


export default PersonalInfo;


