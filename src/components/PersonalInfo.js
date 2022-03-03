import { React, useState } from 'react';
import { validmail, validNum } from './FormValidations'
import next from '../assets/Next.svg'
import prev from '../assets/Previous.svg'
import ellipse1 from '../assets/Ellipse 1.svg';
import ellipse2 from '../assets/Ellipse 2.svg';



const PersonalInfo = ({ nextPage, prevPage, personal }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('')
  const [lastNameErr, setLastNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [numberErr, setNumberErr] = useState('');


  const validFirstName = () => {
    if(firstName === '') {
      setFirstNameErr('first name is required')
      return false;
    } else if(firstName.length < 2){
      setFirstNameErr('first name should include 2 or more characters')
      return false;
    } else {
      return true;
    }
  }

  const validLastName = () => {
    if(lastName === '') {
      setLastNameErr('last name is required')
      return false;
    } else if(lastName.length < 2){
      setFirstNameErr('last name should include 2 or more characters')
      return false;
    } else {
      return true;
    }
  }

  const validEmail = () => {
    if(email === ''){
      setEmailErr('email is required')
      return false;
    } else if (!email.match(validmail)){
      setEmailErr('email must be correct email address')
      return false;
    } else {
      return true;
    }
  }

  const validNumber = () => {
    if(!number.match(validNum) && !number ===''){
      setNumberErr('phone must be correct phone number')
      return false;
    }  else {
      return true;
    }
  }


  const validationResult = () => {
    setFirstNameErr('');
    setLastNameErr('');
    setEmailErr('');
    setNumberErr('');
    validFirstName('');
    validLastName('');
    validEmail('');
    validNumber('');
    if(validFirstName() &&
      validLastName() &&
      validEmail() &&
      validNumber()){
      personal({
        firstName: firstName,
        lastName: lastName,
        email: email,
        number: number ? number : ''
      })
      console.log(personal)
      nextPage();
    }
  }


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
        {firstNameErr && <p className="personalValidation">{firstNameErr}</p>}
          </div>

          <div>
          <input type="text"
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        {lastNameErr && <p className="personalValidation">{lastNameErr}</p>}
          </div>

          <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         {emailErr && <p className="personalValidation">{emailErr}</p>}
          </div>

          <div>
          <input
            type="text"
            placeholder="+995 5"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
         />
         {numberErr && <p className="personalValidation">{numberErr}</p>}
          </div>
        </div>
        <div className="pagination">
          <img src={prev} onClick={prevPage} className="prevnext" />
          <img src={ellipse1} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={ellipse2} className="pagination-steps" />
          <img src={next} onClick={validationResult} className="prevnext" />
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


