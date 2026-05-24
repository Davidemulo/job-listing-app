import { useState } from "react";

type JobProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
};

const JobCard = ({ title, company, location, salary }: JobProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      marginBottom: "12px",
      borderRadius: "8px"
    }}>
      <h2>{title}</h2>
      <p>{company}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div style={{ marginTop: "10px" }}>
          <p>Location: {location}</p>
          <p>Salary: {salary}</p>
        </div>
      )}
    </div>
  );
};

export default JobCard;