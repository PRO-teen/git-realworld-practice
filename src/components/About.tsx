export default function About() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        textAlign: "center",
        background: "#f5f5f5",
        color: "#333",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        About Us
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        We are passionate about building modern web applications while
        following real-world software engineering practices. This project is
        designed to simulate how professional teams collaborate using Git,
        feature branches, pull requests, code reviews, and continuous
        integration.
      </p>
    </section>
  );
}