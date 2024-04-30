// import React from 'react'

// const Success = () => {
//     return (
//         <>
//             <h1>Success Page </h1>
//             pp
//         </>
//     );
// }

// export default Success


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
                {/* Add more relevant details here */}
            </div>
            {/* <p className="info">A confirmation email has been sent to your inbox. Please check your email shortly.</p> */}
            <div className="actions">
                <Link to="/" className="link">Go Back to Home</Link>
                {/* Add more actions/buttons as needed */}
            </div>
        </div>
    );
}

export default Success;
