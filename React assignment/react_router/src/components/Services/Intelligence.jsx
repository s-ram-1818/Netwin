import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";

const Intelligence = () => {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>
        Artificial Intelligence Solutions
      </h1>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Harness the power of Artificial Intelligence and Machine Learning to
        unlock new possibilities for your business. Our AI experts develop
        intelligent solutions that drive innovation and competitive advantage.
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
          <h2 style={{ color: "#444", marginBottom: "15px" }}>
            AI Services We Offer:
          </h2>
          <ul style={{ fontSize: "15px", lineHeight: "2", color: "#555" }}>
            <li>✓ Machine Learning Model Development</li>
            <li>✓ Natural Language Processing (NLP)</li>
            <li>✓ Computer Vision Solutions</li>
            <li>✓ Predictive Analytics</li>
            <li>✓ Chatbot & Virtual Assistant Development</li>
            <li>✓ Recommendation Systems</li>
            <li>✓ AI-Powered Automation</li>
            <li>✓ Deep Learning Applications</li>
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
          <h2 style={{ color: "#444", marginBottom: "15px" }}>Key Metrics:</h2>
          <ul style={{ fontSize: "14px", lineHeight: "2.2", color: "#555" }}>
            <li>
              <strong>Model Accuracy:</strong> 95-99% depending on use case
            </li>
            <li>
              <strong>Training Time:</strong> 2-8 weeks for production models
            </li>
            <li>
              <strong>ROI Timeline:</strong> 6-12 months
            </li>
            <li>
              <strong>Processing Speed:</strong> Real-time (sub-100ms)
            </li>
            <li>
              <strong>Data Security:</strong> Enterprise-grade encryption
            </li>
            <li>
              <strong>Scalability:</strong> Handle millions of predictions/day
            </li>
          </ul>
        </div>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        AI Technologies & Frameworks:
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
          <strong>ML Frameworks:</strong> TensorFlow, PyTorch, scikit-learn,
          XGBoost
          <br />
          <strong>NLP Tools:</strong> NLTK, SpaCy, BERT, GPT, Transformers
          <br />
          <strong>Computer Vision:</strong> OpenCV, YOLO, Detectron2, MediaPipe
          <br />
          <strong>Cloud AI:</strong> OpenAI APIs, Google Vertex AI, AWS
          SageMaker
          <br />
          <strong>Data Processing:</strong> Apache Spark, Hadoop, Pandas, NumPy
        </p>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        AI Implementation Process:
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
            title: "Data Preparation",
            desc: "Collection, cleaning & labeling",
          },
          { title: "Model Development", desc: "Training & tuning algorithms" },
          { title: "Testing & Validation", desc: "Performance evaluation" },
          {
            title: "Deployment & Monitoring",
            desc: "Production release & optimization",
          },
        ].map((phase, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#fff3cd",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#856404",
                marginBottom: "10px",
                fontSize: "15px",
              }}
            >
              {phase.title}
            </h3>
            <p
              style={{ color: "#856404", fontSize: "13px", lineHeight: "1.6" }}
            >
              {phase.desc}
            </p>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Real-World Use Cases:
      </h2>
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
          <h3 style={{ color: "#d9534f", marginBottom: "10px" }}>
            Customer Centric
          </h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
            <li>✔ Personalized recommendations</li>
            <li>✔ Customer behavior prediction</li>
            <li>✔ Sentiment analysis & feedback</li>
            <li>✔ Automated customer support</li>
            <li>✔ Churn prediction & retention</li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#d9534f", marginBottom: "10px" }}>
            Operations & Finance
          </h3>
          <ul style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
            <li>✔ Fraud detection & prevention</li>
            <li>✔ Risk assessment & scoring</li>
            <li>✔ Financial forecasting</li>
            <li>✔ Anomaly detection</li>
            <li>✔ Supply chain optimization</li>
          </ul>
        </div>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>Business Impact:</h2>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
          borderLeft: "4px solid #d9534f",
        }}
      >
        <ul style={{ fontSize: "15px", lineHeight: "2", color: "#555" }}>
          <li>
            💰 <strong>Revenue Growth:</strong> 20-40% increase through better
            targeting
          </li>
          <li>
            ⏱️ <strong>Cost Savings:</strong> 30-50% reduction in manual
            processes
          </li>
          <li>
            📊 <strong>Data Insights:</strong> Actionable intelligence from raw
            data
          </li>
          <li>
            ⚡ <strong>Efficiency:</strong> Faster decision-making with
            automated insights
          </li>
          <li>
            🎯 <strong>Accuracy:</strong> Reduced errors through intelligent
            systems
          </li>
        </ul>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>Success Stories:</h2>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
          borderLeft: "4px solid #5cb85c",
        }}
      >
        <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555" }}>
          <strong>E-Commerce Recommendation Engine:</strong> Implemented
          ML-based product recommendations, resulting in 35% increase in average
          order value and 28% boost in sales.
          <br />
          <br />
          <strong>Healthcare Diagnostics:</strong> Developed AI model for
          disease prediction with 96% accuracy, enabling early intervention and
          40% improvement in patient outcomes.
        </p>
      </div>

      <h2 style={{ color: "#444", marginBottom: "15px" }}>
        Data Privacy & Ethics:
      </h2>
      <div
        style={{
          backgroundColor: "#e7f3ff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <ul style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
          <li>✔ GDPR & compliance ready</li>
          <li>✔ Data anonymization techniques</li>
          <li>✔ Transparent AI/ML models (Explainable AI)</li>
          <li>✔ Bias detection & mitigation</li>
          <li>✔ Secure data handling & encryption</li>
        </ul>
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
            Integrate AI into custom applications
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
            Digital Transformation
          </h3>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            Transform with AI-powered solutions
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
      </div>

      <div
        style={{
          backgroundColor: "#fff3cd",
          padding: "30px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "15px" }}>
          Unlock AI Potential for Your Business
        </h2>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
          Discover how AI can transform your operations and drive growth.
        </p>
        <button
          style={{
            backgroundColor: "#d9534f",
            color: "#fff",
            padding: "12px 30px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get AI Consultation
        </button>
      </div>
    </div>
  );
};

export default Intelligence;
