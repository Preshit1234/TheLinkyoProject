import './css/login.css';
import { importAll } from './js/import-data';

/**
 * An UI component which handles user login process.
 * @returns {ReactNode}
 */
const Login = () => {
    const svgs = importAll(require.context('../assets/svgs/', false, /.(png|jpe?g|svg)$/));

    const handleSubmit = () => {

    }

    return (
        <div id="login-container">
            <div className="login-google-link">
                <img src={svgs["icon-google.svg"]} alt="Google Icon" className="login-google-icon" />
                Express Login with Google
            </div>
            <span className="login-partition">
                <hr />
                <span>Or</span>
                <hr />
            </span>
            <form action="#" method="" className="login-form">
                <input type="email" className="login-form-input" id="login-form-input-email" placeholder="Enter Your Email Address" />
                <input type="number" className="login-form-input" id="login-form-input-login-code" placeholder="Enter Login Code" />
                <button type="button" className="login-form-submit-button" onClick={handleSubmit}>
                    Continue
                    {/* <img src={svgs["arrow.svg"]} alt="Arrow" className="login-form-arrow" /> */}
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="login-form-arrow">
                        <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default Login;