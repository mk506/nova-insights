import { Search, Bell, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="glass-card border-b border-white/10 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1800px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">N</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Nexus<span className="text-primary">Intel</span></span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Deep Query Search (150+ Companies)"
                className="w-full h-12 pl-12 pr-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all duration-300"
              />
              <div className="absolute right-4 flex items-center gap-2">
                <kbd className="px-2 py-1 text-xs bg-white/10 rounded-md text-muted-foreground border border-white/10">⌘K</kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary p-0.5">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
