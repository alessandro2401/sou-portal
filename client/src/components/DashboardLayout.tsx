import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Network,
  LogOut,
  Menu,
  ShieldCheck,
  BookOpen,
  Palette,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoText } from "@/components/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const userInitials = user ? getInitials(user.name) : "?";

  const navigation = [
    { name: "Visão Geral", href: "/", icon: LayoutDashboard },
    { name: "Contratos", href: "/contratos", icon: FileText },
    { name: "Cronogramas", href: "/cronogramas", icon: Calendar },
    { name: "Diagramas", href: "/diagramas", icon: Network },
    { name: "Documentação", href: "/documentacao", icon: BookOpen },
    { name: "Anexos Técnicos", href: "/anexos", icon: ShieldCheck },
    { name: "Manual da Marca", href: "https://sou-brand-manual-gnwttqdqn-alessandro-s-projects-4e3366f0.vercel.app/", icon: Palette, external: true },
    { name: "Modelo de Entrada do Sistema", href: "https://sou-login-mockup.vercel.app/", icon: LogIn, external: true },
  ];

  const NavItem = ({ item, mobile = false }: { item: typeof navigation[0], mobile?: boolean }) => {
    const isActive = location === item.href;
    const isExternal = 'external' in item && item.external;
    
    const content = (
      <div
        className={cn(
          "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-none transition-colors cursor-pointer",
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground border-r-2 border-primary"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
          mobile && "w-full"
        )}
        onClick={() => mobile && setIsMobileOpen(false)}
      >
        <item.icon className="h-4 w-4" />
        {item.name}
      </div>
    );
    
    if (isExternal) {
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    
    return (
      <Link href={item.href}>
        {content}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-sidebar fixed h-full z-30">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <LogoText />
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>

        <div className="p-4 border-t border-border space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
              {userInitials}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-medium text-foreground truncate text-xs">
                {user?.name ?? "Usuário"}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {user?.email ?? ""}
              </span>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors rounded-none"
          >
            <LogOut className="h-4 w-4" />
            Sair do Portal
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background z-40 flex items-center justify-between px-4">
        <LogoText />
        <div className="flex items-center gap-1">
          <button
            onClick={logout}
            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
            title="Sair"
          >
            <LogOut className="h-5 w-5" />
          </button>
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="h-16 flex items-center px-6 border-b border-border">
              <LogoText />
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} mobile />
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                  {userInitials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-medium text-foreground truncate text-xs">
                    {user?.name ?? "Usuário"}
                  </span>
                </div>
              </div>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:pl-64 pt-16 md:pt-0 min-h-screen transition-all duration-200 ease-in-out">
        <div className="container py-8 animate-in fade-in duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
