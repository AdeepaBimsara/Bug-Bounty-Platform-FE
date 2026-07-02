import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Users, Bug, DollarSign } from "lucide-react";
import Sidebar from "../dashboard/researcher_dashboard/Sidebar";
import { useEffect, useState } from "react";
import { getProgramById } from "../../services/program";
// import mockPrograms from "../programs/data/Programs";

const ProgramDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const program = mockPrograms.find((item: any) => item.id === Number(id));

  const [program, setProgram] = useState<any>(null);

  useEffect(() => {
    if (id) {
      loadProgram();
    }
  }, [id]);

  const loadProgram = async () => {
    try {
      const data = await getProgramById(id!);
      setProgram(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!program) {
    return <div className="text-white">Program Not Found</div>;
  }

  return (
    <div
      className="
    min-h-screen
    bg-linear-to-br
    from-black
    via-slate-950
    to-indigo-950
    text-white
    "
    >
      <Sidebar />

      <main className="ml-72 p-10">
        {/* Back Button */}

        <button
          onClick={() => navigate("/programs")}
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
          Back to Programs
        </button>

        {/* Main Card */}

        <div
          className="
        bg-white/5
        backdrop-blur-xl
        border
        border-cyan-500/20
        rounded-3xl
        p-10
        shadow-xl
        shadow-cyan-500/10
        "
        >
          {/* Header */}

          <div className="flex items-center gap-6">
            <div
              className="
            w-24
            h-24
            rounded-2xl
            bg-cyan-400/20
            flex
            items-center
            justify-center
            text-5xl
            "
            >
              {/* {program.logo} */}
              {program.companyId.fullName.charAt(0)}
            </div>

            <div>
              <h1
                className="
              text-5xl
              font-bold
              text-cyan-400
              "
              >
                {/* {program.name} */}
                {program.title}
              </h1>

              <p
                className="
              text-slate-400
              text-xl
              mt-2
              "
              >
                {/* {program.company} */}
                {program.companyId.fullName}
              </p>
            </div>
          </div>

          {/* Stats */}

          <div
            className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-6
          mt-12
          "
          >
            <StatCard
              icon={<DollarSign />}
              title="Maximum Reward"
              value={`$${program.rewardMin} - $${program.rewardMax}`}
            />

            <StatCard icon={<Bug />} title="Type" value={program.type} />

            <StatCard
              icon={<Users />}
              title="Visibility"
              value={program.visibility}
            />

            <StatCard icon={<Shield />} title="Status" value={program.status} />
          </div>

          {/* Description */}

          <div className="mt-12">
            <h2
              className="
            text-2xl
            font-bold
            "
            >
              {program.description}
            </h2>

            <p
              className="
            text-slate-400
            mt-4
            leading-7
            "
            >
              Find security vulnerabilities and help improve
              {program.companyId.fullName}'s products. Researchers can submit
              valid security issues and earn rewards.
            </p>
          </div>

          {/* Tags */}
          {/* 
          <div className="mt-8 flex gap-3 flex-wrap">
            {program.tags.map((tag: string) => (
              <span
                key={tag}
                className="
              px-5
              py-2
              rounded-full
              bg-cyan-400/20
              text-cyan-300
              border
              border-cyan-400/20
              "
              >
                {tag}
              </span>
            ))}
          </div> */}
          <div className="mt-8 flex gap-3 flex-wrap">
            <span className="px-5 py-2 rounded-full bg-cyan-400/20 text-cyan-300">
              {program.type}
            </span>

            <span className="px-5 py-2 rounded-full bg-purple-500/20 text-purple-300">
              {program.visibility}
            </span>

            <span className="px-5 py-2 rounded-full bg-green-500/20 text-green-300">
              {program.status}
            </span>
          </div>

          {/* Submit Button */}

          <button
            onClick={() => navigate(`/submit-report/${program._id}`)}
            className="
          mt-12
          px-10
          py-4
          rounded-xl
          bg-cyan-400
          text-black
          font-bold
          hover:scale-105
          transition
          "
          >
            Submit Vulnerability Report
          </button>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, title, value }: any) => {
  return (
    <div
      className="
bg-white/5
border
border-cyan-500/20
rounded-2xl
p-6
"
    >
      <div className="text-cyan-400">{icon}</div>

      <h3 className="text-slate-400 mt-3">{title}</h3>

      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default ProgramDetails;
