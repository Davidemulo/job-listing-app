import shareIcon from "../assets/icons/share-08.svg";
import bookmarkIcon from "../assets/icons/bookmark-01.svg";
import officeIcon from "../assets/icons/office.svg";
import locationIcon from "../assets/icons/location-05.svg";
import coinsIcon from "../assets/icons/coins-01.svg";
import chairIcon from "../assets/icons/office-chair.svg";
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
            <img src={shareIcon} alt="share" />
            <img src={bookmarkIcon} alt="share" />
        </div>
    </div>

    {/* META INFO */}
    <div className="jobMeta">
        <div className="jobCompany">
            <img src={officeIcon} alt="share" />
            <span>{company}</span>
        </div>
        <div className="jobLocation">
            <img src={locationIcon} alt="share" />
            <span>{location}</span>
        </div>
        <div className="jobSalary">
            <img src={coinsIcon} alt="share" />
            <span>{salary}</span>
        </div>
        <div className="jobLevel">
            <img src={chairIcon} alt="share" />
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