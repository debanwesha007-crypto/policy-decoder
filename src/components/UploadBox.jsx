import { useRef, useState } from "react";

function UploadBox({ policyText, setPolicyText }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFile = async (file) => {
    if (!file) return;

    setFileName(file.name);

    if (file.type === "text/plain") {
      const text = await file.text();
      setPolicyText(text);
      return;
    }

    if (file.type === "application/pdf") {
      try {
        const pdfjsLib = await import("pdfjs-dist");

        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.mjs",
          import.meta.url
        ).toString();

        const buffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

        let extractedText = "";

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
          const page = await pdf.getPage(pageNumber);
          const content = await page.getTextContent();

          extractedText +=
            content.items.map((item) => item.str).join(" ") + "\n";
        }

        setPolicyText(extractedText);
      } catch (error) {
        console.error(error);
        alert("Could not read this PDF. Try pasting the policy text instead.");
      }

      return;
    }

    alert("Please upload a PDF or TXT file.");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  return (
    <div className="upload-box">
      <div
        className="drop-zone"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.txt,application/pdf,text/plain"
          hidden
          onChange={(event) => handleFile(event.target.files?.[0])}
        />

        <div className="upload-icon">↑</div>

        <h3>Drop your policy here</h3>

        <p>
          PDF or TXT, or{" "}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
          >
            browse files
          </button>
        </p>

        {fileName && (
          <div className="file-selected">
            ✓ {fileName}
          </div>
        )}
      </div>

      <div className="or-divider">
        <span>OR PASTE TEXT</span>
      </div>

      <textarea
        value={policyText}
        onChange={(event) => setPolicyText(event.target.value)}
        placeholder="Paste your insurance policy text here..."
        rows={12}
      />

      <div className="character-count">
        {policyText.length.toLocaleString()} / 60,000 characters
      </div>
    </div>
  );
}

export default UploadBox;