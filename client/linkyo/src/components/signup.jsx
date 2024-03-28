import './css/signup.css';
import { importAll } from './js/import-data';

export default function Signup() {
    
    const svgs = importAll(require.context('../assets/svgs/', false, /.(png|jpe?g|svg)$/));
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="signup-container">
            <div className="signup-google-link">
                <img src={svgs["icon-google.svg"]} alt="Google Icon" className="signup-google-icon" />
                Express Login with Google
            </div>
            <p className="signup-partition">
                <hr />
                <span>Or</span>
                <hr />
            </p>
            <form action="#" method="" className="signup-form">
                <input type="email" className="signup-form-input" id="signup-form-input-email" placeholder="Enter Your Email Address" />
                <button type="submit" className="signup-form-submit-button" onClick={handleSubmit}>
                    Continue
                    {/* <img src={svgs["arrow.svg"]} alt="Arrow" className="signup-form-arrow" /> */}
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup-form-arrow">
                        <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    );
}