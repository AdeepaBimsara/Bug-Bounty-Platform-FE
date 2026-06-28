import {
  Edit,
  Share2,
  Award,
} from "lucide-react";
import Sidebar from "../dashboard/researcher_dashboard/Sidebar";
import { useEffect, useState } from "react";
import { getMyProfile } from "../../services/rprofileService";

export const ResearcherProfile = () => {

  const [profile,setProfile] =useState<any>(null);

    const initials = profile?.fullName
                           ?.split(" ")
                           .map((name: any) => name[0])
                           .join("")
                           .toUpperCase()

  const achievements = [
    "Top Hunter",
    "Critical Master",
    "Elite Researcher",
    "First 100 Reports",
    "Fast Responder",
    "Hall of Fame",
  ];

  const skills = [
    "Web Security",
    "API Security",
    "XSS",
    "SQL Injection",
    "Cloud Security",
    "Mobile Security",
    "OSINT",
    "Network Security",
  ];

  useEffect(()=>{

 const loadProfile = async()=>{

   const data =
    await getMyProfile();

   setProfile(data.data);

 }


 loadProfile();


},[]);

  

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white p-8">
    
        <Sidebar/>

      {/* HERO SECTION */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 ml-72">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="flex items-center gap-6">

            <div className="w-32 h-32 rounded-full bg-linear-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-4xl font-bold shadow-[0_0_50px_rgba(34,211,238,0.4)]">
              {initials}
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                {profile?.fullName}
              </h1>

              <p className="text-cyan-400 mt-2">
                {profile?.email}
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                  {profile?.role}
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                  Top 0%
                </span>

                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  Verified
                </span>
              </div>

              <p className="text-slate-400 mt-3">
                Reputation Score: 0 • Joined 2026
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400">
              <Edit className="inline mr-2 w-4 h-4" />
              Edit Profile
            </button>

            <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20">
              <Share2 className="inline mr-2 w-4 h-4" />
              Share
            </button>
          </div>

        </div>
      </div>
     
      {/* ACHIEVEMENTS */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 ml-72">
        <h2 className="text-2xl font-semibold mb-6">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((item) => (
            <div
              key={item}
              className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-4"
            >
              <Award className="text-cyan-400 mb-3" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 ml-72">
        <h2 className="text-2xl font-semibold mb-6">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearcherProfile