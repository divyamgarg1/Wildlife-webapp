import React, { useState } from "react";
import "./Upload.css";

function Upload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        alert("File uploaded successfully!");
    };

    return (
        <div className="upload-container">
            <h1>Upload Field Datasheets</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file}>Upload</button>
        </div>
    );
}

export default Upload;
