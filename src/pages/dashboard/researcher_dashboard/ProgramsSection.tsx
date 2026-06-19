import { ArrowRight, Shield } from 'lucide-react';

interface Program {
  id: string;
  company: string;
  title: string;
  targetType: string;
  rewards: { severity: string; amount: string }[];
}

const programs: Program[] = [
  {
    id: '1',
    company: 'TechCorp',
    title: 'Web Application Security',
    targetType: 'Web Application',
    rewards: [
      { severity: 'Critical', amount: '$5,000-$25,000' },
      { severity: 'High', amount: '$1,000-$5,000' },
    ],
  },
  {
    id: '2',
    company: 'SecureCloud',
    title: 'API & Cloud Infrastructure',
    targetType: 'API & Cloud',
    rewards: [
      { severity: 'Critical', amount: '$10,000-$50,000' },
      { severity: 'High', amount: '$2,000-$10,000' },
    ],
  },
  {
    id: '3',
    company: 'DataVault',
    title: 'Mobile Application Security',
    targetType: 'Mobile App',
    rewards: [
      { severity: 'Critical', amount: '$2,000-$15,000' },
      { severity: 'High', amount: '$500-$2,000' },
    ],
  },
  {
    id: '4',
    company: 'NetworkPro',
    title: 'Network & Infrastructure',
    targetType: 'Infrastructure',
    rewards: [
      { severity: 'Critical', amount: '$8,000-$40,000' },
      { severity: 'High', amount: '$1,500-$8,000' },
    ],
  },
];

const ProgramCard = ({ program }: { program: Program }) => {

  return (
    <div className="program-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-400/70 font-semibold mb-1">
            {program.company}
          </p>
          <h3 className="text-lg font-semibold text-white">{program.title}</h3>
        </div>
        <Shield className="w-5 h-5 text-cyan-400/50" />
      </div>

      <p className="text-sm text-gray-400 mb-4">Target: {program.targetType}</p>

      <div className="mb-4 space-y-2">
        {program.rewards.map((reward) => (
          <div
            key={reward.severity}
            className="flex justify-between items-center text-sm"
          >
            <span className="text-gray-400">{reward.severity}:</span>
            <span className="text-cyan-400 font-semibold">{reward.amount}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-cyan-400/20 hover:border-cyan-400/50">
        View Program
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function ProgramsSection() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Available Bug Bounty Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

export default ProgramCard