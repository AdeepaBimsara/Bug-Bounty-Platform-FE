// import {
//   DollarSign,
//   Wallet,
//   Trophy,
//   Users,
//   TrendingUp,
//   Clock,
// } from "lucide-react";

import Sidebar from "../dashboard/company_dashboard/Sidebar";

// const stats = [
//   {
//     title: "Total Rewards Paid",
//     value: "$248,750",
//     change: "+18%",
//     icon: DollarSign,
//   },
//   {
//     title: "Pending Rewards",
//     value: "$14,500",
//     change: "12 Pending",
//     icon: Clock,
//   },
//   {
//     title: "Security Budget",
//     value: "$500,000",
//     change: "49% Used",
//     icon: Wallet,
//   },
//   {
//     title: "Average Bounty",
//     value: "$1,280",
//     change: "+6%",
//     icon: TrendingUp,
//   },
//   {
//     title: "Highest Reward",
//     value: "$15,000",
//     change: "Critical",
//     icon: Trophy,
//   },
//   {
//     title: "Active Researchers",
//     value: "124",
//     change: "+21",
//     icon: Users,
//   },
// ];

// export default function RewardsCenter() {
//   return (
//     <div className="min-h-screen bg-[#0B0F19] text-white relative overflow-hidden p-8">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[150px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[150px]" />

//       <div className="relative z-10">

//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold">
//             Rewards Center
//           </h1>

//           <p className="text-slate-400 mt-2">
//             Manage bug bounty payouts, researcher rewards and security budget allocation.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
//           {stats.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="
//                 backdrop-blur-xl
//                 bg-white/5
//                 border border-white/10
//                 rounded-3xl
//                 p-6
//                 hover:border-cyan-400/40
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
//               "
//               >
//                 <div className="flex justify-between items-center">

//                   <div>
//                     <p className="text-slate-400 text-sm">
//                       {item.title}
//                     </p>

//                     <h2 className="text-3xl font-bold mt-2">
//                       {item.value}
//                     </h2>

//                     <p className="text-cyan-400 text-sm mt-2">
//                       {item.change}
//                     </p>
//                   </div>

//                   <div
//                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-gradient-to-br
//                     from-cyan-500/20
//                     to-purple-500/20
//                     flex
//                     items-center
//                     justify-center
//                   "
//                   >
//                     <Icon className="text-cyan-400" size={28} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Analytics */}
//         <div
//           className="
//           grid
//           lg:grid-cols-3
//           gap-6
//           mb-10
//         "
//         >
//           <div
//             className="
//             lg:col-span-2
//             bg-white/5
//             border border-white/10
//             backdrop-blur-xl
//             rounded-3xl
//             p-6
//           "
//           >
//             <h3 className="text-xl font-semibold mb-6">
//               Reward Analytics
//             </h3>

//             <div className="h-[350px] flex items-center justify-center text-slate-500">
//               Monthly Rewards Paid Chart
//             </div>
//           </div>

//           <div
//             className="
//             bg-white/5
//             border border-white/10
//             backdrop-blur-xl
//             rounded-3xl
//             p-6
//           "
//           >
//             <h3 className="text-xl font-semibold mb-6">
//               Severity Distribution
//             </h3>

//             <div className="h-[350px] flex items-center justify-center text-slate-500">
//               Donut Chart
//             </div>
//           </div>
//         </div>

//         {/* Pending Rewards */}
//         <div
//           className="
//           bg-white/5
//           border
//           border-white/10
//           backdrop-blur-xl
//           rounded-3xl
//           p-6
//           mb-10
//         "
//         >
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold">
//               Pending Rewards
//             </h2>

//             <button
//               className="
//               px-4 py-2
//               bg-cyan-500
//               rounded-xl
//               hover:bg-cyan-400
//             "
//             >
//               Approve All
//             </button>
//           </div>

//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-white/10 text-slate-400">
//                 <th className="py-4 text-left">Report</th>
//                 <th className="text-left">Researcher</th>
//                 <th className="text-left">Severity</th>
//                 <th className="text-left">Reward</th>
//                 <th className="text-left">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr className="border-b border-white/5">
//                 <td className="py-5">SQL Injection</td>
//                 <td>Alex Morgan</td>
//                 <td>
//                   <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
//                     Critical
//                   </span>
//                 </td>
//                 <td>$8,000</td>
//                 <td>
//                   <span className="text-yellow-400">
//                     Pending
//                   </span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Bottom Grid */}
//         <div className="grid lg:grid-cols-2 gap-6">

//           {/* Leaderboard */}
//           <div
//             className="
//             bg-white/5
//             border border-white/10
//             backdrop-blur-xl
//             rounded-3xl
//             p-6
//           "
//           >
//             <h3 className="text-2xl font-semibold mb-6">
//               Top Researchers
//             </h3>

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span>🥇 Alex Morgan</span>
//                 <span>$25,000</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>🥈 John Smith</span>
//                 <span>$18,000</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>🥉 Sarah Lee</span>
//                 <span>$15,000</span>
//               </div>
//             </div>
//           </div>

//           {/* Budget Wallet */}
//           <div
//             className="
//             bg-white/5
//             border border-white/10
//             backdrop-blur-xl
//             rounded-3xl
//             p-6
//           "
//           >
//             <h3 className="text-2xl font-semibold mb-6">
//               Security Budget Wallet
//             </h3>

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span>Current Budget</span>
//                 <span>$500,000</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Available Funds</span>
//                 <span>$255,250</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Reserved Funds</span>
//                 <span>$14,500</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Total Spent</span>
//                 <span>$248,750</span>
//               </div>

//               <button
//                 className="
//                 mt-4
//                 w-full
//                 py-3
//                 rounded-xl
//                 bg-gradient-to-r
//                 from-cyan-500
//                 to-purple-500
//               "
//               >
//                 Add Funds
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

const RewardsCenter = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white p-6">
        <Sidebar/>
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Rewards Center</h1>

      <p className="text-slate-400 max-w-lg">
        We're currently building a powerful rewards management experience for
        DefenZo. Soon you'll be able to manage bounty payouts, track reward
        history and monitor security budgets from one place.
      </p>

      <span className="mt-6 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
        Under Development
      </span>
    </div>
    </div>

  );
};

export default RewardsCenter;
