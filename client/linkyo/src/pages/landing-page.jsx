import {importAll} from '../components/js/import-data.js';
import Signup from '../components/signup.jsx';
import './css/landing-page.css';

export default function LandingPage() {
    
    const svgs = importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));
    const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|gif|svg)$/));

    return (
        <div className="landing-page-container">
            <p className="inline tagline-1">
                Join forces with us and tap into a dynamic network of top<br />
                <span className="tagline-1-gradient-1">Tech Affiliates</span> & <span className="tagline-1-gradient-2">Digital</span> products.
            </p>
            <img src={svgs["globe-1.svg"]} alt="Globe" className="inline globe" />
            <p className="inline tagline-2">
                The greatest <span className="tagline-2-gradient-1">Creative</span> boom of our generation is just getting started<br />
                <span className="tagline-2-gradient-2">Witness the change, the no nonsense way.</span>
            </p>
            <Signup />
            <div className="inline-flex companies">
                <p>Trusted by the world's leading organizations ↘</p><br />
                <div className="companies-2">
                    <img src={svgs["logo-stripe.svg"]} alt="Stripe Logo" />
                    <img src={svgs["logo-pinterest.svg"]} alt="Pinterest Logo" />
                    <img src={svgs["logo-kpmg.svg"]} alt="KPMG Logo" />
                    <img src={svgs["logo-mercedes-benz.svg"]} alt="Mercedes-Benz Logo" />
                    <img src={svgs["logo-p-and-g.svg"]} alt="P&G Logo" />
                    <img src={svgs["logo-telus.svg"]} alt="Telus Logo" />
                </div>
            </div>
            <div className="inline-flex quote-block">
                <img src={images["placeholder-trendhero.gif"]} alt="Trendhero Placeholder" className="quote-img" />
                <div className="quote-body-wrap">
                    <p className="quote-body">
                        <span className="quote-body-text-1">60 Million</span> new creators emerged <br />
                        in the previous ten years. <br />
                        They will <span className="quote-body-text-2">increase</span> by <span className="quote-body-text-3">50%</span> during <br />
                        the following two years. And it <br />
                        hasn't ended yet; this is just the <br />
                        <span className="quote-body-text-4">Inception</span>.<br />
                    </p>
                    {/* <br /> */}
                    <p className="quote-source-wrap">
                        <span className="quote-source-pre">-</span> 
                        <span className="quote-source">Trendhero.io</span>
                    </p>
                </div>
            </div>
            <p className="inline about-1">
                <span className="about-1-1">Linkyo</span><br />
                <span className="about-1-2">
                    A next-gen digital affiliate marketing platform powered by <span className="about-1-3">AI.</span>
                </span>
            </p>
            <p className="inline about-2">
                <span className="about-2-1">10X</span><br />
                <span className="about-2-2">Engagement</span><br />
                <img src={images["drop-zywa.png"]} alt="Zywa Drop Card" className="about-2-img-1" />
                <img src={images["drop-grammarly.png"]} alt="Grammarly Drop Card" className="about-2-img-2" />
            </p>
            <div className="inline about-3">
                <p className="about-3-1">Why Join <span className="about-3-2">Linkyo?</span></p>
                <div className="about-3-3">
                    <div className="about-3-3-1 card">
                        <p className="about-3-3-1-title title">Be the first to know</p>
                        <p className="about-3-3-1-description description">Get exclusive updates and early access to our affiliate marketing program launch.</p>
                    </div>
                    <div className="about-3-3-2 card">
                        <p className="about-3-3-2-title title">Maximize Earnings</p>
                        <p className="about-3-3-2-description description">Monetize your audience and earn commissions by promoting top digital products.</p>
                    </div>
                    <div className="about-3-3-3 card">
                        <p className="about-3-3-3-title title">Diverse product portfolio</p>
                        <p className="about-3-3-3-description description">Gain access to a wide range of digital products across various categories.</p>
                    </div>
                </div>
            </div>
            <Signup />
            <div className="faq">
                <p className="faq-title">Learn More in FAQ's</p>
                <div className="faq-container">
                    <div className="faq-question-block">
                        <span className="faq-number">1.</span> 
                        <span className="faq-question">How does Linkyo affiliate marketing work?</span>
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-arrow">
                            <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="faq-question-block">
                        <span className="faq-number">2.</span> 
                        <span className="faq-question">What types of digital products can I promote?</span>
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-arrow">
                            <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="faq-question-block">
                        <span className="faq-number">3.</span> 
                        <span className="faq-question">How do I earn commissions?</span>
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-arrow">
                            <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="faq-question-block">
                        <span className="faq-number">4.</span> 
                        <span className="faq-question">Is affiliate marketing suitable for me?</span>
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-arrow">
                            <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="faq-question-block">
                        <span className="faq-number">5.</span> 
                        <span className="faq-question">How do I track my affiliate earnings?</span>
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-arrow">
                            <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <Signup />
            <p className="footer">
                <span className="footer-linkyo">Linkyo</span><br />
                <span className="footer-rights">All rights reserved.2024</span>
            </p>
        </div>
    );
}