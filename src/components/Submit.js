import React from 'react';
import '../App.css';


const Submit = ({prevPage,submitApplication}) => {
    return (
        <div className="submitPage">
            <div>
            <button className="submit-btn" onClick={submitApplication}>Submit</button>
            <button className="submit-go-back-btn" onClick={prevPage}>go back</button>
            </div>
        </div>
    )
}

export default Submit;