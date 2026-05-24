import { useState } from "react";
import "./JobCard.css";

type JobProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
};

const JobCard = ({ title, company, location, salary }: JobProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="jobCard">
        {/* HEADER*/}
        <div className="jobHeader">
        <h2 className="jobTitle">{title}</h2>
        <div className="side-icons">
            <img src="/src/assets/icons/share-08.svg" alt="" />
            <img src="/src/assets/icons/bookmark-01.svg" alt="" />
        </div>
    </div>

    {/* META INFO */}
    <div className="jobMeta">
        <div className="jobCompany">
            <img src="/src/assets/icons/office.svg" alt="" />
            <span>{company}</span>
        </div>
        <div className="jobLocation">
            <img src="/src/assets/icons/location-05.svg" alt="" />
            <span>{location}</span>
        </div>
        <div className="jobSalary">
            <img src="/src/assets/icons/coins-01.svg" alt="" />
            <span>{salary}</span>
        </div>
        <div className="jobLevel">
            <img src="/src/assets/icons/office-chair.svg" alt="" />
            <span>Mid</span>
        </div>
    </div>

    {/* BUTTON */}
    <button className="primaryBtn" onClick={() => setExpanded(!expanded)}>
    {expanded ? "Hide details" : "View details"}
    </button>

    {/* EXPANDED SECTION */}
    {expanded && (
        <div className="jobDetails">
          <h4>Minimum Qualifications</h4>
          <ul>
            <li>Bachelor’s degree in Computer Science or related field</li>
            <li>5+ years experience in software engineering</li>
            <li>Experience with cloud platforms and system design</li>
            <li>Knowledge of AI/LLMs and data systems</li>
            <li>Strong programming skills (Python, Scala, R)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobCard;