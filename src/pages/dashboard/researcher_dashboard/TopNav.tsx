'use client';

import { Search, Bell, User } from 'lucide-react';

export const TopNav = () => {

  return (
    <div className="fixed top-0 left-64 right-0 h-16 border-b border-cyan-400/20 bg-black/40 backdrop-blur-md px-8 flex items-center justify-between z-40">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-100">
          Welcome back, <span className="text-cyan-400">Security Researcher</span>
        </h2>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full bg-cyan-400/5 border border-cyan-400/20 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-cyan-400/10 transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-cyan-400/10 transition-colors group">
          <Bell className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors">
          <div className="w-8 h-8 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-full flex items-center justify-center border border-cyan-400/30">
            <User className="w-4 h-4 text-cyan-400" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default TopNav
