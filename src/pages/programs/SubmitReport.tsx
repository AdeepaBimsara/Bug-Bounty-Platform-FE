import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../dashboard/researcher_dashboard/Sidebar";
import mockPrograms from "../programs/data/Programs";
import { ArrowLeft, Upload, Shield } from "lucide-react";
import React, { useState } from "react";
import api from "../../services/api";

const SubmitReport = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const program = mockPrograms.find((item) => item.id === Number(id));

  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("programId", String(program?.id));

      formData.append("programName", program?.name || "");

      formData.append("title", title);
      formData.append("severity", severity);
      formData.append("description", description);

      if (file) {
        formData.append("proofFile", file);
      }

      const response = await api.post("/reports", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      alert("Report Submitted Successfully");

      navigate("/reports");
    } catch (err) {
      console.error(err);
      alert("Failed to submit report");
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-black via-slate-900 to-indigo-950
        text-white
        "
    >
      <Sidebar />

      <main className="ml-150 p-10">
        <button
          onClick={() => navigate(`/programs/${id}`)}
          className="
            flex
            items-center
            gap-2
            text-slate-400
            hover:text-cyan-400
            mb-8
            "
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div
          className="
        max-w-4xl
        bg-white/5
        border
        border-cyan-400/20
        rounded-3xl
        p-10
        backdrop-blur-xl
        "
        >
          <div className="flex gap-4 items-center">
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-cyan-400/20
                flex
                items-center
                justify-center
                text-3xl
                "
            >
              {program?.logo}
            </div>

            <div>
              <h1
                className="
                text-3xl
                font-bold
                text-cyan-400
                "
              >
                Submit Report
              </h1>

              <p className="text-slate-400">{program?.name}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="
            mt-10
            space-y-6
            "
          >
            <div>
              <label>Report Title</label>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Example: Stored XSS vulnerability"
                className="
                w-full
                mt-2
                bg-black/30
                border
                border-cyan-400/20
                rounded-xl
                p-4
                outline-none
                focus:border-cyan-400
                "
              />
            </div>

            <div>
              <label>Severity</label>

              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="
                w-full
                mt-2
                bg-black/30
                border
                border-cyan-400/20
                rounded-xl
                p-4
                "
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>

            <div>
              <label>Description</label>

              <textarea
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain vulnerability details..."
                className="
                w-full
                mt-2
                bg-black/30
                border
                border-cyan-400/20
                rounded-xl
                p-4
                outline-none
                "
              ></textarea>
            </div>

            <div
              className="
              border
              border-dashed
              border-cyan-400/30
              rounded-xl
              p-8
              text-center
              hover:border-cyan-400
              transition-all
              cursor-pointer
            "
            >
              {!preview ? (
                <label htmlFor="proof-upload" className="cursor-pointer">
                  <Upload className="mx-auto text-cyan-400 w-10 h-10" />

                  <p className="text-slate-400 mt-2">Upload research file</p>
                </label>
              ) : (
                <div className="space-y-4">
                  <img
                    src={preview}
                    alt="preview"
                    className="
                    w-full
                    max-h-60
                    object-cover
                    rounded-xl
                    border
                    border-cyan-400/20
                  "
                  />

                  <p className="text-cyan-400 text-sm font-medium">
                    {file?.name}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setFile(null);
                      setPreview("");
                    }}
                    className="
                    px-4
                    py-2
                    rounded-lg
                    bg-red-500/10
                    text-red-400
                    hover:bg-red-500/20
                    transition
                  "
                  >
                    Remove File
                  </button>
                </div>
              )}

              <input
                id="proof-upload"
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];

                  if (selectedFile) {
                    setFile(selectedFile);
                    setPreview(URL.createObjectURL(selectedFile));
                  }
                }}
              />
            </div>

            <button
              className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-black
                font-bold
                hover:scale-[1.02]
                transition
                "
            >
              Submit Vulnerability Report
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubmitReport;
