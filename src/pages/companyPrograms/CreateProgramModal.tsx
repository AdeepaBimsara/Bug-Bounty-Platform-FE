import { X, Shield, DollarSign } from "lucide-react";
import { createProgram, updateProgram } from "../../services/program";
import { useEffect, useState } from "react";

interface CreateProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  program?: any;
  loadPrograms: () => void;
}

const CreateProgramModal = ({
  isOpen,
  onSuccess,
  onClose,
  program,
}: CreateProgramModalProps) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [scope, setScope] = useState("");
  const [visibility, setVisibility] = useState("PUBLIC");
  const [rewardMin, setRewardMin] = useState(0);
  const [rewardMax, setRewardMax] = useState(0);

  const isEditMode = !!program;

  const handleSubmit = async () => {
    try {
      if (isEditMode) {
        await updateProgram(program._id, {
          title,
          description,
          scope,
          type,
          rewardMin,
          rewardMax,
        });
        alert("Program updated");
        onSuccess();
        onClose();
      } else {
        await createProgram({
          title,
          description,
          scope,
          visibility,
          rewardMin,
          rewardMax,
        });

        alert("Program Created");
        onSuccess();
        onClose();
      }
    } catch (err) {
      alert("Create Failed");
      console.error(err);
    }
  };

  useEffect(() => {
    if (program) {
      setTitle(program.title);
      setDescription(program.description);
      setScope(program.scope);
      setType(program.type);
      setRewardMin(program.rewardMin);
      setRewardMax(program.rewardMax);
    } else {
      setTitle("");
      setDescription("");
      setScope("");
      setType("");
      setRewardMin(0);
      setRewardMax(0);
    }
  }, [program]);

  return (
    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/70 backdrop-blur-sm
    "
    >
      <div
        className="
        relative
        w-full
        max-w-3xl
        rounded-3xl
        border border-cyan-500/20
        bg-slate-950/95
        backdrop-blur-xl
        p-3
        shadow-[0_0_50px_rgba(34,211,238,0.15)]
       
      "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            p-2
            rounded-lg
            hover:bg-white/10
          "
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">{isEditMode ? "Edit Program" : "Create Program"}</h2>

          <p className="text-slate-400 mt-2">
            Launch a new bug bounty program and invite researchers.
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Program Name */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm">Program Name</label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Netflix Security Program"
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
                outline-none
                focus:border-cyan-400
              "
            />
          </div>

          {/* Program Type */}
          <div>
            <label className="block mb-2 text-sm">Program Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
              "
            >
              <option>Web</option>
              <option>API</option>
              <option>Mobile</option>
              <option>Cloud</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block mb-2 text-sm">Visibility</label>

            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
              "
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>

          {/* Min Reward */}
          <div>
            <label className="block mb-2 text-sm">Minimum Reward</label>

            <input
              value={rewardMin}
              onChange={(e) => setRewardMin(Number(e.target.value))}
              type="number"
              placeholder="$100"
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
              "
            />
          </div>

          {/* Max Reward */}
          <div>
            <label className="block mb-2 text-sm">Maximum Reward</label>

            <input
              value={rewardMax}
              onChange={(e) => setRewardMax(Number(e.target.value))}
              type="number"
              placeholder="$5000"
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
              "
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm">Program Description</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Describe your bug bounty program..."
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
                resize-none
              "
            />
          </div>

          {/* Scope */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm">Scope</label>

            <textarea
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              rows={4}
              placeholder="*.example.com, api.example.com ..."
              className="
                w-full
                rounded-xl
                border border-cyan-500/20
                bg-black/40
                p-4
                resize-none
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
              hover:bg-cyan-400
              transition
            "
          >
            {/* Create Program */}
            {isEditMode ? "Edit Program" : "Create Program"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;
