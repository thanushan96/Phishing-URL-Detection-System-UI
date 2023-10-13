import React from "react";

export default function About({ setShowResultCard }) {
  setShowResultCard(false);
  return (
    <div className="container mt-2 min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div>
        <h1 className="text-center">
          <span className="text-primary">PhishGuard</span> 🛡️🔍
        </h1>
        <p className="lead text-center">
          <span className="text-primary">Stay One Step Ahead:</span> Harnessing
          the Power of Deep Learning and NLP to Detect Phishing URLs 🚀
        </p>
        <div className="text-center">
          <h2 className="mb-4">What is PhishGuard?</h2>
          <p>
            PhishGuard is an innovative web application that utilizes advanced
            Deep Learning and Natural Language Processing (NLP) techniques to
            detect and protect users from phishing URLs. By analyzing the
            content and structure of URLs, PhishGuard can identify potential
            threats and warn users before they fall victim to phishing attacks.
          </p>
          <h2 className="mt-5">How does it work?</h2>
          <p>
            PhishGuard employs state-of-the-art machine learning algorithms to
            analyze the characteristics of URLs. It leverages the power of Deep
            Learning and NLP models to detect patterns and indicators of
            phishing attempts. By examining the URL's domain, subdomain,
            keywords, and other relevant features, PhishGuard assesses the
            likelihood of it being a phishing URL. Its intelligent detection
            system provides real-time protection and helps users stay safe
            online.
          </p>
          <h2 className="mt-5">Why choose PhishGuard?</h2>
          <ul className="list-group">
            <li className="list-group-item">
              Advanced Deep Learning and NLP technology
            </li>
            <li className="list-group-item">
              Real-time protection against evolving phishing threats
            </li>
            <li className="list-group-item">
              User-friendly interface for easy navigation
            </li>
            <li className="list-group-item">
              Regular updates and continuous improvement
            </li>
            <li className="list-group-item">
              Efficient and reliable detection system
            </li>
          </ul>
          <p className="mt-4">
            Take control of your online security and protect yourself from
            phishing attacks with PhishGuard. Get started now by entering your
            URL in the input box above and experience the power of advanced Deep
            Learning and NLP in action!
          </p>
        </div>
      </div>
    </div>
  );
}
