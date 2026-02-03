import React from "react";

const AppDev = () => {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>
        Application Development
      </h1>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        We build web and mobile applications to help your business grow.
      </p>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>What We Offer:</h2>
      <ul
        style={{
          fontSize: "15px",
          lineHeight: "2",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        <li>✓ Web Applications</li>
        <li>✓ Mobile Apps</li>
        <li>✓ Cloud Solutions</li>
        <li>✓ API Development</li>
        <li>✓ Support & Maintenance</li>
      </ul>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Technologies We Use:
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
          <strong>Frontend:</strong> React, Vue.js, Angular, TypeScript,
          Tailwind CSS
          <br />
          <strong>Backend:</strong> Node.js, Python, Java, .NET, GraphQL
          <br />
          <strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Firebase, Redis
          <br />
          <strong>Cloud:</strong> AWS, Google Cloud, Microsoft Azure, Heroku
          <br />
          <strong>DevOps:</strong> Docker, Kubernetes, Jenkins, CI/CD Pipelines
        </p>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Development Process:
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        {[
          {
            title: "Planning",
            desc: "Requirements gathering & architecture design",
          },
          {
            title: "Development",
            desc: "Agile sprint-based development with daily standups",
          },
          { title: "Testing", desc: "Unit, integration & UAT testing" },
          { title: "Deployment", desc: "Production release & monitoring" },
        ].map((phase, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#e8f4f8",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#2c3e50",
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              {phase.title}
            </h3>
            <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.6" }}>
              {phase.desc}
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>Key Benefits:</h2>
      <ul
        style={{
          fontSize: "15px",
          lineHeight: "2",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        <li>✔ Improved operational efficiency</li>
        <li>✔ Enhanced user experience & engagement</li>
        <li>✔ Scalable architecture for future growth</li>
        <li>✔ Reduced development time with agile methodology</li>
        <li>✔ 24/7 technical support & maintenance</li>
        <li>✔ Flexible pricing models</li>
      </ul>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Case Study Highlights:
      </h2>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
          borderLeft: "4px solid #3498db",
        }}
      >
        <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555" }}>
          <strong>E-Commerce Platform:</strong> Developed a full-stack
          e-commerce solution serving 100K+ users monthly. Increased online
          sales by 150% within 6 months of launch.
          <br />
          <br />
          <strong>SaaS Application:</strong> Built a cloud-based project
          management tool with 10K+ active subscriptions. Maintained 99.9%
          uptime with auto-scaling infrastructure.
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
            Digital Transformation
          </h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            Modernize your legacy systems with latest technologies
          </p>
          <a
            href="/services/digitaltransformation"
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
            AI Integration
          </h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            Add intelligent features to your applications
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
          Ready to Transform Your Ideas?
        </h2>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          Contact our team today for a free consultation and project quote.
        </p>
        <button
          style={{
            backgroundColor: "#3498db",
            color: "#fff",
            padding: "12px 30px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default AppDev;
