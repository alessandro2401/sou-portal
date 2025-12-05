import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Network, 
  Settings, 
  LogOut,
  Menu,
  X,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: "Visão Geral", href: "/", icon: LayoutDashboard },
    { name: "Contratos", href: "/contratos", icon: FileText },
    { name: "Cronogramas", href: "/cronogramas", icon: Calendar },
    { name: "Diagramas", href: "/diagramas", icon: Network },
    { name: "Anexos Técnicos", href: "/anexos", icon: ShieldCheck },
  ];

  const NavItem = ({ item, mobile = false }: { item: typeof navigation[0], mobile?: boolean }) => {
    const isActive = location === item.href;
    return (
      <Link href={item.href}>
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
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-sidebar fixed h-full z-30">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="flex items-center gap-2 font-bold text-lg text-primary">
            <ShieldCheck className="h-6 w-6" />
            <span>SOU Portal</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-foreground">Adm. Mutual</span>
              <span className="text-xs">Gestor do Projeto</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-lg text-primary">
          <ShieldCheck className="h-6 w-6" />
          <span>SOU Portal</span>
        </div>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="h-16 flex items-center px-6 border-b border-border">
              <div className="flex items-center gap-2 font-bold text-lg text-primary">
                <ShieldCheck className="h-6 w-6" />
                <span>SOU Portal</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} mobile />
              ))}
            </div>
          </SheetContent>
        </Sheet>
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
