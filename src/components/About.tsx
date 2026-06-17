import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Analyst with experience in IT and e-commerce domains. I help grow
          revenue by 20% through data-driven business decisions and develop Power BI
          dashboards to present insights clearly to business teams. Skilled in
          Python, SQL, and Excel — turning complex data into simple, actionable
          results for stakeholders.
        </p>
        <div className="quick-stats" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "25px" }}>
          <span className="what-tags" style={{ fontSize: "13px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>🎓 MCA (Machine Learning)</span>
          <span className="what-tags" style={{ fontSize: "13px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>💼 2 Internships</span>
          <span className="what-tags" style={{ fontSize: "13px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>🚀 4+ Major Projects</span>
          <span className="what-tags" style={{ fontSize: "13px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>📊 Data Analytics Specialist</span>
          <span className="what-tags" style={{ fontSize: "13px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>🤖 AI & ML Enthusiast</span>
          <span className="what-tags" style={{ fontSize: "13px", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)" }}>☁️ AWS & Azure Knowledge</span>
        </div>
      </div>
    </div>
  );
};

export default About;
