import React, { useState } from "react";
import "./styles/SummarizerComponent.css"; // Import the CSS styles

const SummarizerComponent: React.FC = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setText(event.target?.result as string || ""); // Read file content
            };
            reader.readAsText(file); // Read the file as text
        }
    };

    const handleSummarize = () => {
        // Add summarize logic
        console.log("Summarized Text:", text);
    };

    return (
        <div className="summarizer-container">
            <header className="summarizer-header">
                <h2 className="usa-heading">AI Summarizer</h2>
                <span className="usa-tag">2.0</span>
            </header>

            <div className="summarizer-input-area">
                <textarea
                    className="usa-textarea"
                    placeholder="Start typing or paste your content here..."
                    value={text}
                    onChange={handleTextChange}
                />

                <div className="summarizer-actions">
                    <button className="usa-button" onClick={() => setText("Sample Text")}>
                        Sample Text
                    </button>
                    <button
                        className="usa-button usa-button--secondary"
                        onClick={() => console.log("Add URL Clicked")}
                    >
                        Add URL
                    </button>
                    <button
                        className="usa-button usa-button--secondary"
                        onClick={() => navigator.clipboard.readText().then(setText)}
                    >
                        Paste Text
                    </button>
                </div>

                <div className="summarizer-upload">
                    <label htmlFor="file-upload" className="label-upload">
                        Upload File
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".txt"
                        onChange={handleFileUpload}
                    />
                </div>

                <div className="summarizer-length-toggle">
                    <label htmlFor="length-slider">Short</label>
                    <input
                        type="range"
                        id="length-slider"
                        min="0"
                        max="1"
                        step="0.1"
                        className="usa-range"
                    />
                    <label htmlFor="length-slider">Long</label>
                </div>
            </div>

            <button className="usa-button usa-button--primary" onClick={handleSummarize}>
                Summarize
            </button>

            <footer className="summarizer-footer">
                <p>&copy; 2024 AI Summarizer. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SummarizerComponent;
