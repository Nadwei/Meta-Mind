import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function Summary() {


    const report = document.getElementById("summary");

    const summary = () => {

    

        {
             
        }
    }

    return (
        <ErrorBoundary componentName="Summary">
            <div id="summary-container">
                <div id="summary-header">
                    <h1>This is the Summary component</h1>
                </div>


            </div>
        </ErrorBoundary>
    )
}