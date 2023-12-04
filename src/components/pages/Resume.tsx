import React from "react";

export default function Resume() {
    return (
        <div className="wholePage container-fluid row">
            <div className="imageBanner resumeImg col-4"></div>
            <div className="col-8">
                <div className="sectionHeader row">
                    <h2>Resume</h2>
                </div>
                {/* need to build backend link for allowing resume download in the anchor tag below */}
                <div className="sectionBody row justify-content-center">
                    <p className="resumeBody text-center">If you'd like to download a copy
                    of my resume, you can do so here <a href='https://docs.google.com/document/d/10kqPgprWIFwfsjOeCo2kzqKw7_Qo_GPtO-V0OH-9EpE/edit?usp=sharing' target="_blank">Jason Johnson Resume</a></p>
                    <p className="resumeBody text-center">I have a passion for customer service and servant leadership.  The following are some of my skills: </p>
                    <div className="row resumeBody justify-content-center text-center">
                    <ul className="col-4 resumeBody">
                        <li><span className="ms-4">Salesforce</span></li>
                        <li><span className="ms-4">Hubspot</span></li>
                        <li><span className="ms-4">Microsoft Office</span></li>
                        <li><span className="ms-4">PowerBI</span></li>
                        <li><span className="ms-4">Jira</span></li>
                        <li><span className="ms-4">Javascript</span></li>
                        <li><span className="ms-4">MySql</span></li>
                        <li><span className="ms-4">React.js</span></li>
                        <li><span className="ms-4">Postman/Insomnia</span></li>
                    </ul>
                    <ul className="col-4 resumeBody">
                        <li><span className="ms-4">Service</span></li>
                        <li><span className="ms-4">Operations</span></li>
                        <li><span className="ms-4">Leadership</span></li>
                        <li><span className="ms-4">Customer Satisfaction</span></li>
                        <li><span className="ms-4">Communication</span></li>
                        <li><span className="ms-4">Analysis</span></li>
                        <li><span className="ms-4">Presentation</span></li>
                        <li><span className="ms-4">Public Speaking</span></li>
                        <li><span className="ms-4">Reporting</span></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}