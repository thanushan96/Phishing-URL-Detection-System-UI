import React from "react";

const footerStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "black",
  color: "white",
  padding: "4px 0",
  textAlign: "center",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy; 2023 PhishGuard</p>
      </div>
    </footer>
  );
}
