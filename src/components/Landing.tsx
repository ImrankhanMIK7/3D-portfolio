import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [processedRecords, setProcessedRecords] = useState(10240);
  const [analyzedCustomers, setAnalyzedCustomers] = useState(5180);
  const [revenueGrowth, setRevenueGrowth] = useState(20.4);
  const [dataAccuracy, setDataAccuracy] = useState(98.6);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live updates every 4 seconds (within 3-5s range)
      setProcessedRecords((prev) => prev + Math.floor(Math.random() * 12) + 3);
      setAnalyzedCustomers((prev) => prev + Math.floor(Math.random() * 6) + 1);
      setRevenueGrowth(Number((20 + Math.random() * 0.8).toFixed(1)));
      setDataAccuracy(Number((98 + Math.random() * 0.9).toFixed(1)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <video
          className="landing-bg-video"
          src="/Futuristic_data_analytics_comm.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.35,
            filter: "saturate(0.95)",
            pointerEvents: "none",
          }}
        />
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              IMRAN
              <br />
              <span>KHAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Data Analyst</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Python & SQL</div>
              <div className="landing-h2-2">Power BI</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Specialist</div>
            </h2>
          </div>

          <div className="live-metrics-panel">
            <div className="metrics-row">
              <div className="metric-box">
                <h4>{processedRecords.toLocaleString()}+</h4>
                <p>Processed Records</p>
              </div>
              <div className="metric-box">
                <h4>{analyzedCustomers.toLocaleString()}+</h4>
                <p>Analyzed Customers</p>
              </div>
              <div className="metric-box">
                <h4>{revenueGrowth}%</h4>
                <p>Revenue Growth</p>
              </div>
              <div className="metric-box">
                <h4>{dataAccuracy}%</h4>
                <p>Data Accuracy</p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
