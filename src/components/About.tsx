// src/components/About.tsx

export default function About() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
        }}
      >
        About Our Company
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "1.1rem",
          color: "#b0b0b0",
        }}
      >
        We build modern web applications while following real-world software
        engineering practices. This project is designed to help developers
        learn Git, GitHub, collaboration, pull requests, code reviews, and
        version control through practical scenarios.
      </p>

      <button
        style={{
          marginTop: "2rem",
          padding: "0.8rem 1.8rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Learn More
      </button>
    </section>
  );
}