import {
  Building2,
  Globe,
  MapPin,
  ShieldCheck,
  Calendar,
  Users,
  Briefcase,
  Pencil,
  Award,
} from "lucide-react";
import Sidebar from "../dashboard/company_dashboard/Sidebar";
import { useEffect, useState } from "react";
import { getCompanyProfile } from "../../services/companyService";

export const CompanyProfile = () => {

    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

     const initials = profile?.fullName
                           ?.split(" ")
                           .map((name: any) => name[0])
                           .join("")
                           .toUpperCase()

    useEffect(() => {

    const fetchProfile = async () => {
        try {

            const data = await getCompanyProfile();

            setProfile(data);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    fetchProfile();

}, []);

  return (
    <div className="min-h-screen bg-[#060B14] text-white">

      <Sidebar/>

      {/* Banner */}

      <div className="relative h-64 overflow-hidden ml-65">

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#060B14] via-[#060B14]/30 to-transparent" />

        <button
          className="absolute right-8 top-8
          flex items-center gap-2
          rounded-xl
          bg-cyan-500 px-5 py-3
          font-semibold
          text-black
          hover:bg-cyan-400"
        >
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>

      {/* Profile */}

      <div className="mx-auto max-w-7xl px-10">

        <div className="-mt-20 flex items-end gap-8">

          <div
            className="
            h-40
            w-40
            rounded-3xl
            bg-linear-to-br
            from-cyan-400
            to-purple-600
            flex
            items-center
            justify-center
            text-6xl
            font-black
            shadow-2xl
            transform-3d
            "
          >
            {initials}
          </div>

          <div className="pb-5 flex-1">

            <div className="flex items-center gap-4">

              <h1 className="text-5xl font-bold transform-3d">
                {profile?.fullName} 
              </h1>

              <span
                className="
                rounded-full
                bg-cyan-500/20
                px-4
                py-2
                text-cyan-400
                flex
                items-center
                gap-2
                transform-3d 
                "
              >
                <ShieldCheck size={18} />
                Verified
              </span>

            </div>

            <div className="mt-5 flex flex-wrap gap-8 text-gray-400">

              <div className="flex items-center gap-2">
                <Building2 size={18} />
                Technology
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                USA
              </div>

              <div className="flex items-center gap-2">
                <Globe size={18} />
                microsoft.com
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-4 gap-6">

          {[
            ["Programs", "12"],
            ["Researchers", "3,214"],
            ["Reports", "5,289"],
            ["Rewards Paid", "$4.3M"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >

              <p className="text-gray-400">
                {title}
              </p>

              <h2 className="mt-3 text-4xl font-bold text-cyan-400">
                {value}
              </h2>

            </div>

          ))}

        </div>

        {/* Main */}

        <div className="mt-10 grid grid-cols-3 gap-8">

          {/* Left */}

          <div className="col-span-2 space-y-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="text-2xl font-bold mb-5">
                About Company
              </h2>

              <p className="leading-8 text-gray-300">
                Microsoft operates one of the world's largest cloud
                infrastructures and security ecosystems. The company
                continuously collaborates with security researchers
                worldwide through coordinated vulnerability disclosure
                and bug bounty initiatives.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="text-2xl font-bold mb-5">
                Technologies
              </h2>

              <div className="flex flex-wrap gap-4">

                {[
                  "React",
                  "NodeJS",
                  "TypeScript",
                  "Docker",
                  "AWS",
                  "Azure",
                  "MongoDB",
                  "Kubernetes",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-400/30
                    px-5
                    py-2
                    text-cyan-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="mb-6 text-2xl font-bold">
                Company Info
              </h2>

              <div className="space-y-5">

                <Info icon={<Building2 />} title="Industry" value="Technology" />

                <Info icon={<Users />} title="Employees" value="220,000+" />

                <Info icon={<Calendar />} title="Founded" value="1975" />

                <Info icon={<Briefcase />} title="Programs" value="12 Active" />

                <Info icon={<Award />} title="Compliance" value="ISO 27001" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
        {icon}
      </div>

      <div>

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}

export default CompanyProfile