import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Barkatullah University</h5>
              </div>
              <h3>2020 – 2023</h3>
            </div>
            <p>
              Specialization in Computer Science. Built a solid foundation in computer applications, programming, database management, and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>Rajiv Gandhi Proudyogiki Vishwavidyalaya</h5>
              </div>
              <h3>2023 – 2025</h3>
            </div>
            <p>
              Specialization in Machine Learning. Focused on advanced analytics, predictive modeling, statistical learning, and intelligent system designs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>KultureHire</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p style={{ lineHeight: "1.6" }}>
              • Improved candidate matching accuracy by 25%.<br />
              • Cleaned and transformed large datasets.<br />
              • Reduced processing time by 20%.<br />
              • Generated insights for recruitment analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Singularium Technologies</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p style={{ lineHeight: "1.6" }}>
              • Analyzed business datasets using SQL, Excel, and Python.<br />
              • Built dashboards and reports to track key business metrics.<br />
              • Performed data cleaning, transformation, and visualization.<br />
              • Generated actionable insights to support business decisions.<br />
              • Collaborated with teams to deliver data-driven solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
