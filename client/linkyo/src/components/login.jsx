import './css/login.css';
import { importAll } from './js/import-data';

/**
 * An UI component which handles user login process.
 * @returns {ReactNode}
 */
const Login = () => {
    const svgs = importAll(require.context('../assets/svgs/', false, /.(png|jpe?g|svg)$/));

    /**
     * This function decides what happens after the user clicks on the #login-form-continue-button
     * 
     * Operations and Scenarios:
     * 
     * A) After entering their email address in #login-form-input-email input field and clicking the #login-form-continue-button button:
     *  1) It checks whether the email address is valid or not.
     *  2) Send API request to the backend to send OTP code to the given email address.
     *  3) After receiving the API response:
     *      a) If the user failed to receive the OTP code, handle the exceptions appropriately.
     *      b) If the user receives the OTP code in the given email address, hides the #login-form-input-email input field and show
     *         #login-form-input-login-code input field, with some animations.
     * 
     * B) After entering the OTP code in #login-form-input-login-code input field and clicking the #login-form-continue-button button:
     *  1) It checks whether the OTP code entered is valid or not.
     *  2) Send API requiest to the backend to fetch the sent OTP code.
     *  3) After receiving the API response:
     *      a) If the OTP code matches, a login API request is sent to the backend with the data.
     *         Success: The user is redirected to /browse/drops page and Create a login session.
     *         Failure: Handle the error appropriately.
     * 
     * Note: The data being sent and received will be encrypted.
     */
    const handleContinueButton = () => {
        validateEmail();
    }

    const validateEmail = () => {
        if(
            document.getElementById('login-form-input-email').value
            .match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div id="login-container">
            <form action="#" method="" className="login-form">
                <input type="email" className="login-form-input" id="login-form-input-email" placeholder="Enter Your Email Address" />
                <input type="number" className="login-form-input" id="login-form-input-login-code" placeholder="Enter Login Code" />
                <button type="button" className="login-form-submit-button" onClick={handleContinueButton} id="login-form-continue-button">
                    Continue
                    {/* <img src={svgs["arrow.svg"]} alt="Arrow" className="login-form-arrow" /> */}
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="login-form-arrow">
                        <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </form>
            <span className="login-partition">
                <hr />
                <span>Or</span>
                <hr />
            </span>
            <div className="login-google-link">
                <img src={svgs["icon-google.svg"]} alt="Google Icon" className="login-google-icon" />
                Express Login with Google
            </div>
        </div>
    );
}

export default Login;