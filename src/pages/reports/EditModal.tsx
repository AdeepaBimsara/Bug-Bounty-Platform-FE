import { useState } from 'react';
import { X, Save } from 'lucide-react';

interface Report {
  id: string;
  program: string;
  vulnerability: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Accepted' | 'Reviewing' | 'Pending' | 'Rejected';
  reward: number;
  date: string;
}

interface EditModalProps {
  report: Report;
  onSave: (report: Report) => void;
  onClose: () => void;
}

export const EditModal = ({ report, onSave, onClose }: EditModalProps) => {
  const [formData, setFormData] = useState(report);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'reward' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="glass-hover max-h-[90vh] w-full max-w-md rounded-xl p-6 overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Edit Report</h2>
          <button
            onClick={onClose}
            className="rounded-lg bg-white/5 p-1 transition-all duration-300 hover:bg-white/10"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Report ID</label>
            <input
              type="text"
              value={formData.id}
              disabled
              className="w-full rounded-lg bg-white/5 px-3 py-2 text-foreground outline-none cursor-not-allowed opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Vulnerability Title</label>
            <input
              type="text"
              name="vulnerability"
              value={formData.vulnerability}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/5 px-3 py-2 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
            <textarea
              name="program"
              value={formData.program}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-lg bg-white/5 px-3 py-2 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Severity</label>
              <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
              >
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
              >
                <option>Accepted</option>
                <option>Reviewing</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Reward ($)</label>
            <input
              type="number"
              name="reward"
              value={formData.reward}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/5 px-3 py-2 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg bg-white/5 py-2 font-semibold text-foreground transition-all duration-300 hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-cyan-500/20 py-2 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal