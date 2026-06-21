import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../dashboard/researcher_dashboard/Sidebar";
import mockPrograms from "../programs/data/Programs";
import { ArrowLeft, Upload, Shield } from "lucide-react";
import { useState } from "react";

const SubmitReport = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const program = mockPrograms.find((item) => item.id === Number(id));

  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const report = {
      id: Date.now(),

      programId: program?.id,

      programName: program?.name,

      title,

      severity,

      description,

      status: "Pending",

      createdAt: new Date().toLocaleDateString(),
    };

    console.log(report);

    alert("Report Submitted Successfully");

    navigate("/reports");
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
                "
            >
              <Upload
                className="
                mx-auto
                text-cyan-400
                "
              />

              <p className="text-slate-400 mt-2">Upload proof / screenshots</p>
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
