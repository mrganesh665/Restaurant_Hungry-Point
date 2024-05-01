import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Success.css'; // Import CSS file

const Success = () => {
    return (
        <div className="container">
            <h3> HUNGRY POINT </h3>
            <h1 className="heading">Success!</h1>
            <p className="message">Your Table is reserved</p>
            <div className="details">
                <p className="detailItem"><strong>Confirmation Number:</strong> ABC123</p>
            </div>
            <div className="actions">
                <Link to="/" className="link">Go Back to Home</Link>
            </div>
        </div>
    );
}

export default Success;
