import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload!");
      return;
    }
    // Simulate an upload (Replace with API call)
    alert(`File "${selectedFile.name}" uploaded successfully!`);
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Datasheet</h2>
      <p>Upload scanned datasheets, CSV files, or PDFs for analysis.</p>
      
      <div className="upload-box">
        <input type="file" id="fileInput" onChange={handleFileChange} />
        <label htmlFor="fileInput" className="file-label">Choose a file</label>
      </div>

      {previewUrl && (
        <div className="preview">
          <p>Preview:</p>
          <img src={previewUrl} alt="Preview" />
        </div>
      )}

      <button className="upload-btn" onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default Upload;
