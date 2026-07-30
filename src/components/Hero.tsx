// src/components/Hero.tsx

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Learn Git Like a Pro
      </h1>

      <p
        style={{
          maxWidth: "600px",
          lineHeight: "1.6",
          color: "#b0b0b0",
          marginBottom: "2rem",
        }}
      >
        Practice real-world Git workflows including feature branches, pull
        requests, code reviews, merge conflicts, and collaboration.
      </p>

      <button
        style={{
          padding: "0.8rem 1.8rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Get Started
      </button>
    </section>
  );
}