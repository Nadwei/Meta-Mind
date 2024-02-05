import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Summary from "../components/Summary";

export default function ReportsPage({ reports }) {
    return (
      <ErrorBoundary componentName="ReportsPage">
        <div className="reports-container">
          <h1>This is the reports page</h1>
          <ul>
            <Summary />
            {reports.map((report, index) => (
              <li key={index}>
                <strong>Date:</strong> {report.date}, <strong>Items:</strong>{" "}
                {report.items.length}
              </li>
            ))}
          </ul>
        </div>
      </ErrorBoundary>
    );
  }