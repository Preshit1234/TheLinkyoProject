import { useState } from "react";
import "./css/faq-accordion.css";
import { gsap } from 'gsap';

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
 * An accordion component for FAQ.
 * @returns {ReactNode}
 */
export default function FaqAccordion () {

    /**
     * State variable to store and track which accordions are selected to expand.
     */
    const [multipleSelected, setMultipleSelected] = useState([]);

    /**
     * Handles accordion click event.
     * Determines whether the accordion is selected to expand or collapse and take appropriate actions.
     * Default state is collapsed.
     * 
     * @param {String} faqId | Unique ID of the accordion.
     */
    const handleClick = (faqId) => {
        let cpyMultipleSelected = [...multipleSelected];

        if (cpyMultipleSelected.indexOf(faqId) == -1) {
            cpyMultipleSelected.push(faqId);
        } else {
            cpyMultipleSelected.splice(cpyMultipleSelected.indexOf(faqId));
        }

        setMultipleSelected(cpyMultipleSelected);
        handleAnimations(faqId);
    }

    /**
     * Handles animations of the targetted accordion.
     * @param {String} faqId | Unique ID of the accordion.
     */
    const handleAnimations = (faqId) => {
        let cpyMultipleSelected = [...multipleSelected];

        if (cpyMultipleSelected.indexOf(faqId) == -1) {
            gsap.to("#faq-arrow-"+faqId, {
                rotation: 180,
                duration: 0.6,
                ease: "elastic.out(1, 0.7)"
            });
            gsap.to("#answer-body-"+faqId, {
                height: "auto",
                x: 0,
                duration: 0.6,
                ease: "elastic.out(1.5, 0.5)"
            });
        } else {
            gsap.to("#faq-arrow-"+faqId, {
                rotation: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.7)"
            });
            gsap.to("#answer-body-"+faqId, {
                height: 0,
                x: 10,
                duration: 0.6,
                ease: "elastic.out(1.5, 0.5)"
            });
        }
    }

    return (
        <div className="faq-container">
            {
                faqs.map((faq) => (
                    <div className="faq-question-block" id={"faq-question-block-"+faq.id} key={faq.id} onClick={() => handleClick(faq.id)}>
                        <div className="question-body">
                            <span className="faq-number">{faq.questionNumber}.</span> 
                            <span className="faq-question">{faq.question}</span>
                            <svg width="18" 
                                height="8" 
                                viewBox="0 0 18 8" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="faq-arrow"
                                id={"faq-arrow-"+faq.id} key={faq.id}
                            >
                                <path d="M1.57544 1L9.28772 7L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="answer-body" id={"answer-body-"+faq.id}>
                            <div className="faq-answer">{ faq.answer }</div>
                        </div>                        
                    </div>
                ))
            }
        </div>
    );
}