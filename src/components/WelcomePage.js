import rocket from '../assets/rocketman.svg'
import stars from '../assets/stars.svg'

const WelcomePage = ({ nextPage, submittedList }) => {
    return (
        <div className="welcome-page">
            <img className='background-stars' src={stars} />
            <h1 className="welcome-text">Welcome Rocketeer !</h1>
            <div className='welcome-buttons'>
                <button className="welcome-btn" onClick={nextPage}>Start Questionnaire</button>
                <button className="welcome-btn1" onClick={submittedList}>Submitted Applications</button>
            </div>
            <img className='astro' src={rocket} />

        </div>
    )
}

export default WelcomePage;