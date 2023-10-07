import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-dark text-light text-center py-2"
      style={{ marginTop: "1rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <p>&copy; 2023 PhishGuard</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
