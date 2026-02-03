import React from "react";

const DigitalTransformation = () => {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>
        Digital Transformation
      </h1>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        We help businesses update and improve their systems with modern
        technology.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <div>
          <h2 style={{ color: "#444", marginBottom: "15px" }}>Our Approach:</h2>
          <ul style={{ fontSize: "15px", lineHeight: "2", color: "#555" }}>
            <li>✓ Digital Strategy Consulting</li>
            <li>✓ Legacy System Modernization</li>
            <li>✓ Process Automation</li>
            <li>✓ Data Analytics & Business Intelligence</li>
            <li>✓ Customer Experience Enhancement</li>
            <li>✓ Cybersecurity Integration</li>
            <li>✓ Cloud Migration Services</li>
          </ul>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#444", marginBottom: "15px" }}>Quick Stats:</h2>
          <ul style={{ fontSize: "14px", lineHeight: "2.2", color: "#555" }}>
            <li>
              <strong>Avg. ROI:</strong> 300-500% within 2 years
            </li>
            <li>
              <strong>Implementation Time:</strong> 6-18 months
            </li>
            <li>
              <strong>Cost Reduction:</strong> 40-60% operational savings
            </li>
            <li>
              <strong>Employee Productivity:</strong> +50% improvement
            </li>
            <li>
              <strong>Downtime During Migration:</strong> Zero-downtime assured
            </li>
            <li>
              <strong>Success Rate:</strong> 95% projects on track
            </li>
          </ul>
        </div>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Transformation Journey:
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {[
          { num: "1", title: "Assessment", desc: "Current state analysis" },
          { num: "2", title: "Strategy", desc: "Digital roadmap creation" },
          { num: "3", title: "Planning", desc: "Resource allocation" },
          { num: "4", title: "Implementation", desc: "Phased rollout" },
          { num: "5", title: "Optimization", desc: "Continuous improvement" },
        ].map((step, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#e8f4f8",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#3498db",
                color: "#fff",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {step.num}
            </div>
            <h3
              style={{
                color: "#2c3e50",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              {step.title}
            </h3>
            <p style={{ color: "#666", fontSize: "12px" }}>{step.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>Key Benefits:</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#27ae60", marginBottom: "10px" }}>
            Business Benefits
          </h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
            <li>✔ Increased operational efficiency</li>
            <li>✔ Improved customer satisfaction</li>
            <li>✔ Better decision-making through data insights</li>
            <li>✔ Reduced costs and faster time-to-market</li>
            <li>✔ Enhanced agility and scalability</li>
            <li>✔ New revenue stream opportunities</li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#27ae60", marginBottom: "10px" }}>
            Technical Benefits
          </h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
            <li>✔ Modern, scalable architecture</li>
            <li>✔ Improved system reliability</li>
            <li>✔ Enhanced security & compliance</li>
            <li>✔ API-first integration approach</li>
            <li>✔ Cloud-native applications</li>
            <li>✔ Automation of manual processes</li>
          </ul>
        </div>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Technologies & Tools:
      </h2>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555" }}>
          <strong>Cloud Platforms:</strong> AWS, Azure, Google Cloud Platform
          <br />
          <strong>Integration Tools:</strong> Apache Kafka, MuleSoft, Talend
          <br />
          <strong>Analytics:</strong> Tableau, Power BI, Qlik
          <br />
          <strong>Automation:</strong> RPA, Automation Anywhere, UiPath
          <br />
          <strong>Security:</strong> Zero Trust Architecture, Advanced
          Encryption
        </p>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>Success Stories:</h2>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
          borderLeft: "4px solid #27ae60",
        }}
      >
        <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555" }}>
          <strong>Manufacturing Company:</strong> Migrated from legacy ERP to
          cloud-based system. Achieved 45% reduction in operational costs and
          60% faster order processing.
          <br />
          <br />
          <strong>Financial Services:</strong> Implemented AI-driven compliance
          and fraud detection. Reduced fraud incidents by 87% and compliance
          violations by 92%.
        </p>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>Related Services:</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          <h3 style={{ color: "#3498db", marginBottom: "10px" }}>
            Application Development
          </h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            Build new digital applications for transformation
          </p>
          <a
            href="/services/appdev"
            style={{
              color: "#3498db",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Explore →
          </a>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        >
          <h3 style={{ color: "#3498db", marginBottom: "10px" }}>
            AI Solutions
          </h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            Integrate AI to automate and optimize processes
          </p>
          <a
            href="/services/intelligence"
            style={{
              color: "#3498db",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Explore →
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#e8f4f8",
          padding: "30px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "15px" }}>
          Start Your Digital Transformation
        </h2>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          Let us guide you through a successful digital transformation journey.
        </p>
        <button
          style={{
            backgroundColor: "#27ae60",
            color: "#fff",
            padding: "12px 30px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Schedule Consultation
        </button>
      </div>
    </div>
  );
};

export default DigitalTransformation;
