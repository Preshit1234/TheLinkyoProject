import './css/signup.css';
import { importAll } from './js/import-data';

/**
 * Signup Component.
 * Includes sign in with google optiom OR Sign in with email option
 * @returns {ReactNode} A react element for Signup process
 */
export default function Signup() {
    
    const svgs = importAll(require.context('../assets/svgs/', false, /.(png|jpe?g|svg)$/));
    
    /**
     * Function for handling onClick() event of .signup-form-submit-button html element.
     * @param {*} event 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="signup-container">
            <div className="signup-google-link">
                <img src={svgs["icon-google.svg"]} alt="Google Icon" className="signup-google-icon" />
                Express Login with Google
            </div>
            <span className="signup-partition">
                <hr />
                <span>Or</span>
                <hr />
            </span>
            <form action="#" method="" className="signup-form">
                <input type="email" className="signup-form-input" id="signup-form-input-email" placeholder="Enter Your Email Address" />
                <button type="submit" className="signup-form-submit-button" onClick={handleSubmit}>
                    Continue
                    {/* <img src={svgs["arrow.svg"]} alt="Arrow" className="signup-form-arrow" /> */}
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup-form-arrow">
                        <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    );
}