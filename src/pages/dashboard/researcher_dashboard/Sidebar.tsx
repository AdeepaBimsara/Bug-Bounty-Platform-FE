import {
  LayoutDashboard,
  Search,
  Bug,
  Trophy,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Shield,
} from 'lucide-react';

export const Sidebar = () => {
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Search, label: 'Browse Programs' },
    { icon: Bug, label: 'My Reports' },
    { icon: Trophy, label: 'Bounties' },
    { icon: Trophy, label: 'Leaderboard' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-cyan-400/20 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center glow-cyan">
          <Shield className="w-5 h-5 text-cyan-400" />
        </div>
        <h1 className="text-xl font-bold text-cyan-400">DefenZo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                item.active
                  ? 'bg-cyan-400/20 text-cyan-400 glow-cyan'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
}


export default Sidebar