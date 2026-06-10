import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("360");

  return (
    <div style={{ padding: 32, fontFamily: "sans-serif" }}>
      <h1>CalSavers UX Sandbox</h1>

      <p>This is a working demo environment.</p>

      <div style={{ marginTop: 24 }}>
        <button
          onClick={() => setMode("360")}
          style={{
            marginRight: 12,
            padding: "10px 16px",
            background: mode === "360" ? "#00594f" : "#ccc",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          360 Integration
        </button>

        <button
          onClick={() => setMode("180")}
          style={{
            padding: "10px 16px",
            background: mode === "180" ? "#00594f" : "#ccc",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          180 Integration
        </button>
      </div>

      <div style={{ marginTop: 32 }}>
        {mode === "360" ? (
          <div>
            <h2>360° Experience</h2>
            <p>Overview and payroll integrations content goes here.</p>
          </div>
        ) : (
          <div>
            <h2>180° Experience</h2>
            <p>Alternative integration setup flow goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
