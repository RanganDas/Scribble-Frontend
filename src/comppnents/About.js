import React from "react";

function About() {
  return (
    <div className="container" style={{ color: "white" }}>
      <h2 style={{ marginBottom: "30px" }}>
        Scribble: Your Secure Notes on Cloud
      </h2>
      <div className="container">
        Scribble is your trusted solution for safeguarding and organizing
        your vital notes in the cloud. With Scribble, you can rest easy
        knowing that your important notes are securely stored, accessible from
        anywhere, and protected against loss or damage. Our platform is designed
        to provide you with a reliable and user-friendly experience, ensuring
        that your valuable information is always at your fingertips. Say goodbye
        to the worry of losing critical notes and welcome the peace of mind that
        comes with Scribble's secure cloud storage.
        <p style={{ marginTop: "10px" }}>Created by Rangan Das</p>
        <p>
          Follow me on{" "}
          <a
            href="https://www.linkedin.com/in/rangan-das-687575247"
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingBottom: "20px" }}
          >
            LinkedIn
          </a>
          <p>
            Visit {" "}
            <a
              href="https://rangan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingBottom: "20px" }}
            >
              portfolio
            </a>
          </p>
          <p>
          Our other services {" "}
          <br></br>
            <a
              href="https://editflare.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingBottom: "20px" }}
            >
              EditFlare - Text analyzer
            </a>
            <br></br>
            <a
              href="https://mychatapp-l65e.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingBottom: "20px" }}
            >
              Chat everyone
            </a>
            <br></br>
            <a
              href="https://rangandas.github.io/WeatherForecast/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingBottom: "20px" }}
            >
              Check city temperature
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
