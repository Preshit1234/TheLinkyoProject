import './css/login-page.css';
import Login from '../components/login';
import {importAll} from '../components/js/import-data.js';
import Header from '../components/header';

const LoginPage = () => {
    const svgs = importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));

    return (
        <>
            <Header />
            <div id="login-page-container">
                <p id="login-page-heading">Create your <span>Affable</span> Account. It's freee.</p>
                <p id="login-page-tagline">Join forces with us and tap into a dynamic network of Top <span>Tech Affiliates</span> & <span>Digital</span> products. No Credit card required.</p>
                <Login />
                <p id="login-fine-print">By Continuing You are aggre to Affable terms of Service and Privacy Policy</p>
                <p id="login-page-supporting-text">Already have an account, <span>Login</span></p>
                <div className="inline-flex companies">
                    <p>Trusted by the world's leading organizations ↘</p><br />
                    <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                        <div className="companies-2">
                            <img src={svgs["logo-stripe.svg"]} alt="Stripe Logo" />
                            <img src={svgs["logo-pinterest.svg"]} alt="Pinterest Logo" />
                            <img src={svgs["logo-kpmg.svg"]} alt="KPMG Logo" />
                            <img src={svgs["logo-mercedes-benz.svg"]} alt="Mercedes-Benz Logo" />
                            <img src={svgs["logo-p-and-g.svg"]} alt="P&G Logo" />
                            <img src={svgs["logo-telus.svg"]} alt="Telus Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;