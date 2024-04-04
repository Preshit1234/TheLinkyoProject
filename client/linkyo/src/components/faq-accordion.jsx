import "./css/faq-accordion.css";

const faqs = [
    {
        id: 1,
        questionNumber: 1,
        question: "How does Linkyo affiliate marketing work?",
        answer: "Affiliate marketing involves promoting products or services and earning a commission for each sale or action generated through your unique affiliate link.",
    },
    {
        id: 2,
        questionNumber: 2,
        question: "What types of digital products can I promote?",
        answer: "Affiliate marketing involves promoting products or services and earning a commission for each sale or action generated through your unique affiliate link.",
    },
    {
        id: 3,
        questionNumber: 3,
        question: "How do I earn commissions?",
        answer: "You earn commissions by driving sales or other desired actions, such as sign-ups or leads, through your affiliate link. The commission structure varies depending on the affiliate program.",
    },
    {
        id: 4,
        questionNumber: 4,
        question: "Is affiliate marketing suitable for me?",
        answer: "Affiliate marketing is suitable for anyone with an online presence, including bloggers, social media influencers, content creators, and website owners.",
    },
    {
        id: 5,
        questionNumber: 5,
        question: "How do I track my affiliate earnings?",
        answer: "Linkyo provide tracking tools and dashboards where you can monitor clicks, conversions, and earnings in real-time.",
    }
];

/**
 * An accordion component for FAQ
 * @returns {ReactNode}
 */
export default function FaqAccordion () {
    return (
        <div className="faq-container">
            {
                faqs.map((faq) => (
                    <div className="faq-question-block" key={faq.id}>
                        <div className="question-body">
                            <span className="faq-number">{faq.questionNumber}.</span> 
                            <span className="faq-question">{faq.question}</span>
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="faq-arrow" id={"faq-arrow-"+faq.id} key={faq.id}>
                                <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="answer-body">
                            <p>{faq.answer}</p>
                        </div>                        
                    </div>
                ))
            }
        </div>
    );
}